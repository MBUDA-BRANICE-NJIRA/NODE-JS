const express = require('express');
const routes = express.Router();

const lectureController = require('../controller/lectureControler');
// const {verifyAccessToken } = require ('../helpers/init_mongodb')


// Get all lectures
routes.get('/getAllLecture', lectureController.getAlllecture);

// Add lecture
routes.post('/AddLecture', lectureController.AddLecture);

// Get lecture
routes.get('/getLecture/:id', lectureController.getSlecture);

// Update lecture
routes.patch('/updateLecture/:id', lectureController.updateLecture);

// Delete lecture
// routes.delete('/:id', verifyAccessToken,studentController.deleteStudent)


module.exports = routes;
