const mongose=require('mongoose')
// require('dotenv').config()
//define url for mongodb..
// const Localulr='mongodb://localhost:27017/student';
const onlineUrl= process.env.ONLINEURL
mongose.connect(onlineUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongose.connection;
//add Event listeners
db.on('connected',()=>{console.log('database connected..')})
db.on('error',()=>{console.log('error accure.')})
db.on('disconnected',()=>{console.log('database disconnected..')});
module.exports=db;