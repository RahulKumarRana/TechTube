const mongoose=require('mongoose')
const mon=mongoose.Schema({
    Email:{
        type:String,required:true
    },
    Password:{
        type:String,required:true
    }
})
const logingUser=mongoose.model('loginUser',mon)
module.exports=logingUser;