const std=require('express')
const router=std.Router()

let Student=require('./../Modules/Student');

//post method for registering Student in database.
router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newStudent = new Student(data);
  
      // Save the new person to the database using await
      const savedPerson = await newStudent.save();
  
      console.log('Saved Student to database');
      res.status(201).json(savedPerson);
    } catch (error) {
      console.error('Error saving student:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  //get method for retreving data form data for User profile.
  router.get('/',async (req,res)=>{
    try{
      const data=await Student.find()
      // console.log('your data is:\n'+data)
      res.status(200).json(data)
    }catch(error){
        res.status(500).json(error)
    }
  })
  module.exports=router;