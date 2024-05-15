var _=require('lodash')
var obj=require('fs')
var ios=require("os")
var expres=require('express')
var app=expres();
require('dotenv').config()
//db connection for connect node.js to database.
const db=require('./db')

//Routers for perfoming the operation in main server:-
const delet=require('./routers/deleteStudent')
const stdrout=require('./routers/studentRouter')
const feedback=require('./routers/feedbackRouter')
const login=require('./routers/loginRouter')
const teacher=require('./routers/teachersRouter')
const teacherLogin=require('./routers/teacherLoginRouter')

//bodyParser for converting data into json format ..
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());

const { error } = require('console')

app.use('/register',stdrout)
app.use('/login',login)
app.use('/feedback',feedback)
app.use('/delete',delet)
app.use('/teacherRegister',teacher)
app.use('/teacherLogin',teacherLogin)
//post method for updating profile..
app.post('/update',async(req,res)=>{
  try{
  const updateData=req.body
  // const data=new Update (updateData);
  const result = await Update.collection().updateOne(
   // { _id: ObjectId(id) }, // Filter
    { $set: updateData } // Update data
  );

  res.status(200).json(result)
  
  }catch(error){
  res.status(500).json({error:'You got error on server.'})
  }

})

//get method for getting teachers data..
app.get('/teacherProfile',async (req,res)=>{
  try{
  const data=await Teacher.find();
  res.status(201).json(data)}catch(error){
    res.status(500).json(error)
  }
})
const PORT = process.env.PORT || 3000;
  app.listen(PORT,()=>{
    console.log('server running successfully..')
  })

