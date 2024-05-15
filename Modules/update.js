const mongoose=require('mongoose')
const update=mongoose.Schema({
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
const Update=mongoose.model('Update',update);
module.exports=Update;