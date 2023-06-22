
//import mongoose
const mongoose = require('mongoose')

const db=process.env.DATABASE

mongoose.connect(db,{
    useUnifiedTopology: true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Database is connected');
}).catch((err)=>{
    console.log(err);
})