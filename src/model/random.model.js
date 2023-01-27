const mongoose=require("mongoose");

const randomSchema=new mongoose.Schema({
    character:{
        type:String,
        required:true
    }
})

const randomModel=mongoose.model("random",randomSchema);

module.exports=randomModel