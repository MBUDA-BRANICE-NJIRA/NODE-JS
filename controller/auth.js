const Student = require('../models/auth_studentModel');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { insertOne } = require('../models/studentModel');
const { signAccessToken } = require('../helpers/JwtHelper');   //This imports the signAccesToken function from the JwtHelper.js file

module.exports = {
    login: async (req, res, next) => {
      try {
        const { username, password } = req.body;
        const result = await Student.find({ username: username });
        if (result.length < 1) {
          return res.send('Username does not exist');
        }
        const hashedPassword = result[0].password;
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (!isMatch) {
          return res.send('Password does not match');
        }
        const jwtToken = await signAccessToken(result[0].id)
        res.send({ 
          username:result[0].username,
          email: result[0].email,
          jwtToken: jwtToken
        });
      } catch (error) {
        console.error(error.message);
        next(error);
      }
    },
    register: async (req, res, next) => {
      try {
        const { username, email, password } = req.body;
        const emailregex = /\S+@\S+\.\S+/;
        if (!emailregex.test(email)) {
          return res.send({message:'Email is not valid'});
        }
        const resultemail = await Student.find({ email: email });
        if (resultemail.length > 0) {
          return res.send('Email already exists');
        }
        const resultusername = await Student.find({ username });
        if (resultusername.length > 0) {
           return res.send('username already exists');
        }
        const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if (!passwordregex.test(password)) {
          return res.send('Password must contain at least one numeric digit, one uppercase and one lowercase letter, and at least 6 or more characters');
        }
        const Hashedpassword = await bcrypt.hash(password, 10);
        const newStudent = await new Student({
          username: username,
          email: email,
          password: Hashedpassword
        });
        await newStudent.save();
        res.send(newStudent);
      } catch (error) {
        console.error(error.message);
        next(error);
      }
    }
  };
