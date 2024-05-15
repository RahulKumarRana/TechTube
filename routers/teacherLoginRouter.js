const obj=require('express')
const router=obj.Router()
const Teacher=require('../Modules/teacherLogin')

router.post('/',async(req,res)=>{
    try{
    const teacherData=req.body
    const newTeacher=new Teacher(teacherData);
    const data=await newTeacher.save();
    res.status(200).json({'success':data})

    }catch(error){
        res.status(500).json({error:'Error accure.'})
    }
})
module.exports=router;