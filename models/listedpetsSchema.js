//import mongoose
const mongoose=require('mongoose')

//define schema for pet collection
const listedpetsSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    breed:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    }
})
//create a model to store data
const listedpetsdetails= new mongoose.model("listedpetsdetails",listedpetsSchema)

//export model
module.exports = listedpetsdetails

