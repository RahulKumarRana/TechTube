const mongose=require('mongoose')

const std=new mongose.Schema({
    name:{
        type:String,
        required:true
    },
    rollCode:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
      type:String,
      required:true,
    },

})
const Student=mongose.model('student2',std);
module.exports=Student;