const obj=require('express')
const router=obj.Router()
const stdd=require('../Modules/Student')
//post method for deleting Student in database.
router.post('/',(req,res)=>{
    try{
     const data = stdd.students.remove({"_id":ObjectId("66430e3cb88de66e3db152a8")})
     res.status(201).json({data:'data deleted.'})
    }catch(error){
     res.status(500).json({error:'Internal server error'})
    }
 })
 module.exports=router;