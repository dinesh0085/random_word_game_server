const { application } = require("express");
const express=require("express");
const userModel=require("../model/user.model")

const app=express.Router();

app.post("/addResult",async(req,res)=>{
    const {name,difficulty,score}=req.body;
    
    
    try{
        const player=new userModel({name,difficulty,score})
        await player.save();
        res.send({error:false,data:player})
    }catch(e){
        res.send({error:true,data:e.message})
    }
})

app.get("/",async(req,res)=>{
    const players=await userModel.find();
    try{
        res.send({error:false,data:players})
    }catch(e){
        res.send({error:true,data:e.message})
    }
})

module.exports=app