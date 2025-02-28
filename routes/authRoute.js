const express = require('express');
const routes = express.Router();

 const auth = require('../controller/authContoller');
const authContoller = require('../controller/auth');
 const {verifyAccessToken } = require ('../helpers/init_mongodb')


// Get all Password and Email
routes.get('/getAllAuthController', authContoller.getAllauth);

//Add Password and Email
routes.post('/register', authContoller.register);

// Get student
routes.get('/getAuthController/:id', authContoller.getauth);

// Update Password and Email
routes.patch ('/updat authContoller.updateauth)eAuthController/:id',;

// Delete Password and Email
 routes.delete('/:id', verifyAccessToken,studentController.deleteStudent)


module.exports = routes;
