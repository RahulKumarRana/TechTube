const mongose=require('mongoose')
const std=new mongose.Schema({
    Email:{
        type:String,
        required:true,
    },
    Password:{
      type:String,
      required:true,
    },

})
const Teacher=mongose.model('student',std);
module.exports=Teacher;