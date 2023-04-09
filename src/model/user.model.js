const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    difficulty:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true,versionKey:false})


const userModel=mongoose.model("user",userSchema);

module.exports=userModel