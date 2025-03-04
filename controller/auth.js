const Student = require('../models/auth_studentModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { insertOne } = require('../models/studentModel');
const { signAccesToken } = require('../helpers/JwtHelper');   //This imports the signAccesToken function from the JwtHelper.js file

module.exports = {
    login: async (req, res, next) => {
      try {
        const { username, password } = req.body;
        const result = await Student.find();
        res.send(result);
        next();
      } catch (error) {
        console.error(error.message);
        next(error);
      }
    },
    register: async (req, res, next) => {
      try {
        const { username, email, password } = req.body;
        const resultemail = await Student.find({ email: email });
        if (resultemail.length > 0) {
          res.send('Email already exists');
          next();
        }
        const resultusername = await Student.find({ username });
        if (resultusername.length > 0) {
          res.send('username already exists');
          next();
        }
        const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!passwordregex.test(password)) {
          res.send('Password must contain at least one numeric digit, one uppercase and one lowercase letter, and at least 6 or more characters');
          next();
        }
        const Hashedpassword = await bcrypt.hash(password, 10);
        const newStudent = await new Student({
          username: username,
          email: email,
          password: Hashedpassword
        });
        await newStudent.save();
        res.send(newStudent);
        next();
      } catch (error) {
        console.error(error.message);
        next(error);
      }
    }
  };
