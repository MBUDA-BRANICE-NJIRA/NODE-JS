const express = require('express');
const routes = express.Router();

// const auth = require('../controller/auth');
const authContoller = require('../controller/auth');
//  const {verifyAccessToken } = require ('../helpers/init_mongodb')


// Get all Password and Email
// routes.get('/getAllAuthController', authContoller.getAllauth);

//Add Password and Email
routes.post('/register', authContoller.register);

// Login Password and Email
routes.post('/login', authContoller.login);

// Get student
// routes.get('/getAuthController/:id', authContoller.getauth);

// Update Password and Email
// routes.patch ('/updateAuthController/:id',authContoller.updateauth),

// Delete Password and Email
//  routes.delete('/:id',studentController.deleteStudent)


module.exports = routes;
