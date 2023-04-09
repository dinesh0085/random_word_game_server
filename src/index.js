const express=require('express')
require("dotenv").config();
const PORT=process.env.PORT
const connect=require("./database/connectDB")
const randomModel=require("./model/random.model")
const randomIntegerFunction=require("./controller/getRandom")
const userRoute=require("./route/user.route")
const cors=require("cors")

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
 return res.send('Hello')
})

app.get("/randomword",async(req,res)=>{
    let id=await randomIntegerFunction();
    console.log(id);
    id=id.toString()
     const randomObj=await randomModel.find()
    
     try{
        res.send({error:false,data:randomObj[id]})
     }catch(e){
        res.send({error:true,data:e.message})
     }
})

app.use("/player",userRoute)

app.listen(PORT,async()=>{
    try{
        await connect()
        console.log("Database connected successfully");
    }catch(e){
        console.log(e.message);
    }
    console.log(`Listening Server on PORT :-${PORT}`)
})