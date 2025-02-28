const Student = require('../models/auth_studentModel')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { insertOne } = require('../models/studentModel')
module.exports ={
    login: async(req,res,next)=>{
        const {username, password} = req.body
        try{
            const result = await Student.find()
            res.send(result)
        } catch (error){
            console.log(error.message);
        }
    },
    register: async(req,res,next)=>{
        const {username, email, password} = req.body
        try{
            const resultemail = await Student.find({ email: email })
            if(resultemail.length > 0){
                res.send('Email already exists')
            }
            const resultusername = await Student.find({username})
            if(resultusername.length > 0){
                res.send('username already exists')
            }
            const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
            if(!passwordregex.test(password)){
                res.send('Password must contain at least one numeric digit, one uppercase and one lowercase letter, and at least 6 or more characters')
            }
            const Hashedpassword = await bcrypt.hash(password, 10)
            const newStudent =await new Student ({
                username: username,
                email: email,
                password: Hashedpassword
            })
            res.send(newStudent)
        } catch (error){
            console.log(error.message);
        }
    },

}
