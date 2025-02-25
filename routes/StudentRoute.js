

const express = require('express');//This imports express
const routes = express.Router();//This creates an instance of a router


//Get all students
routes.get('/getAllstudents', studentController.getAllStudents);

//Add students
routes.post('/addStudent/id:', studentController.addStudent);

//Update student
routes.pa('/students/id:', (request, response) =>{
    response.send({type: ' Update Request'});
});

//Delete student
routes.delete('/students/id',(request ,response) =>{
    response.send({type: 'Delete request'});
})


module.exports = routes;
