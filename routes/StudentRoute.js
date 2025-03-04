const express = require('express');
const routes = express.Router();

const studentController = require('../controller/studentController');
 const {verifyAccessToken } = require ('../helpers/JwtHelper');


// Get all students
routes.get('/getAllStudents', verifyAccessToken, studentController.getAllStudents);

// Add student
routes.post('/AddStudent', studentController.AddStudent);

// Get student
routes.get('/getStudent/:id', studentController.getStudent);

// Update student
routes.patch('/updateStudent/:id', studentController.updateStudent);

// routes.delete('/:id', verifyAccessToken,studentController.deleteStudent)
// Delete student
routes.delete('/:id',verifyAccessToken, studentController.deleteStudent);

module.exports = routes;
