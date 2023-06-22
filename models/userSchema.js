//import mongoose

const mongoose = require('mongoose')

//define schema for user collection
 
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
//create a model to store data
const users = new mongoose.model("users",userSchema)

//export model
module.exports=users