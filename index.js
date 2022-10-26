const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())


 const Courses = require('./Data/Courses.json')


 app.get('/', (req, res) =>{
    res.send("Courses API running")
 });

 app.get('/Courses', (req, res)=>{
    res.send(Courses)
 })

 app.listen(port, ()=>{
    console.log("Running",port)
 } )