const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;


app.use(cors())


 const Courses = require('./Data/courses.json')
 const allcourses = require('./Data/allcourses.json')


 app.get('/', (req, res) =>{
    res.send("Courses API running")
 });

 app.get('/Courses', (req, res)=>{
    res.send(Courses)
 })

 app.get('/allcourses/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = allcourses.find(course => course._id === id);
    res.send(selectedCourse);
 })
 app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const CourseId = allcourses.find(course => course._id === id);
    res.send(CourseId);
 })

 app.get('/catagory/:id',(req, res)=>{
    const id = req.params.id;
    if(id === '08'){
        res.send(allcourses)
    }
    else{
        const selectedCatagory= allcourses.filter(course => course.category_id === id);
        res.send(selectedCatagory);
    }
    
 })

 app.listen(port, ()=>{
    console.log("Running",port)
 } )