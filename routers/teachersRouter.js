const obj=require('express')
const router=obj.Router()
// const Teacher=require('./../Modules/teachreLogin')
const Teacher=require('./../Modules/Teacher')
  //post method for posting teachers details into database.
  router.post('/',async(req,res)=>{
    try{
      const teacherData=req.body
      const newTeacher=new Teacher(teacherData);
      const Teacher2=await newTeacher.save();
      console.log("teachers data is saved..")
      res.status(201).json(Teacher2);
    }catch(error){res.status(500).json(error)}
  })
  module.exports=router;