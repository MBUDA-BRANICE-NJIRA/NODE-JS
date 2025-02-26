const express = require('express');
const routes = express.Router();

const studentController = require('../controller/studentController');
// const {verifyAccessToken } = require ('../helpers/init_mongodb')


// Get all students
routes.get('/getAllStudents', studentController.getAllStudents);

// Add student
routes.post('/AddStudent', studentController.AddStudent);

// Get student
routes.get('/getStudent/:id', studentController.getStudent);

// Update student
routes.patch('/updateStudent/:id', studentController.updateStudent);

// Delete student
// routes.delete('/:id', verifyAccessToken,studentController.deleteStudent)


module.exports = routes;
