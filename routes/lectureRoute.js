const express = require('express');
const routes = express.Router();

const lectureController = require('../controller/lectureControler');
// const {verifyAccessToken } = require ('../helpers/init_mongodb')


// Get all lectures
routes.get('/getAllLecture', lectureController.getAllLecture);

// Add lecture
routes.post('/AddLecture', lectureController.AddLecture);

// Get lecture
routes.get('/getLecture/:id', lectureController.getLecture);

// Update lecture
routes.patch('/updateLecture/:id', lectureController.updateLecture);

// Delete lecture
// routes.delete('/:id', verifyAccessToken,studentController.deleteStudent)


module.exports = routes;
