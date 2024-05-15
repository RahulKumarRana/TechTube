const mongoose=require('mongoose')
const teacher=mongoose.Schema({
    name:{
        type:String,required:true
    },
    specility:{
        type:String, required:true
    },
    experience:{
        type:String,required:true
    },
    years:{type:Number,required:true}
})
const Teacher=mongoose.model('teacher',teacher)
module.exports=Teacher;