
const studentController = require('../controllers/studentController');
const controllers = require('../controlers/studentController');
//!Import the express module

const express = require('express');//This imports express

const routes = express.Router();//This creates an instance of a router


//Get all students
routes.get('/getAllstudents', studentController.getAllStudents);

//Add students
routes.post('/addStudent', studentController.addStudent);

//Update student
routes.get('/getStudentById/id:', studentController.updateStudentById);

//Update student
routes.patch('/deleteStudent/id:', studentController.updatetudentById);

//Delete student
routes.delete('/student/id:',( request, response) => {
    response.send({type: 'Delete Request'});
});


module.exports = routes;
