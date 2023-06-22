//import mongoose
const mongoose=require('mongoose')

//define schema for pet collection
const petsSchema=new mongoose.Schema({
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
    age:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    contact_number:{
        type:String,
        required:true
    }
})
//create a model to store data
const petsdetails= new mongoose.model("petsdetails",petsSchema)

//export model
module.exports = petsdetails

