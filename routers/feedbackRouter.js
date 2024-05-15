const feedback=require('express')
const router=feedback.Router()
router.post('/',(req,res)=>{
    const data='this website is good for learning..'
    obj.writeFile("feedback.txt",data,(err)=>{
    if(err){
      res.status(200).json({err:'Inernal error accure.'})
    }else{
      console.log('Thank you for your feedback.')
      res.status(500).json({data:'getting data successfully..'})
    }
    })
  })
  module.exports=router;