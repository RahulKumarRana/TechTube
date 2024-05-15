const login=require('express')
const router=login.Router()
let Login=require('./../Modules/login')
  //post method login request.
  router.post('/',async(req,res)=>{
    try{
    const loginData=req.body
    const verify=new Login(loginData);
    const loginSuccess=await verify.save();
    res.status(201).json(loginSuccess);
    }catch(error){
      res.status(500).json(error)
    }
  })
  module.exports=router;