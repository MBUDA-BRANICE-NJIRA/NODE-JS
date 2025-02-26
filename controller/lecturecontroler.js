const Student = require('../models/studentModel')
const mongoose = require('mongoose')
module.exports ={
    getAllStudents: async(req,res,next)=>{
        try{
            const result = await Student.find()
            res.send(result)
        } catch (error){
            console.log(error.message);
        }
    },

    AddStudent: async(req, res, next)=>{
        try{
            const student = new Student(req.body)
            const result = await student.save();
            res.send(result)

        } catch (error) {
            console.log(error.message);
            // if(error.name === "validationError"){
            //     next(createError(422, error.message))
            //     return;
            // }
            next(error)
        }
    },
        getStudent: async(req,res,next)=>{
            const id = req.params.id;
            try{
                const student = await Student.findById(id)
                if(!student){
                    throw(createError(404, "student does not exist"))
                }
                res.send(student)
            }catch (error) {
                console.log(error.message);
                if(error instanceof mongoose.CastError){
                    next(createError(400, "Invalid student id"));
                    return;
                }
                next(error);
            }
        },

        updateStudent: async (req,res,next)=>{
            try{
                const id = req.params.id;
                const update = req.body;
                const options ={new: true}
                const result = await Student.findByIdandUpdate(id, update, options)

                if (!result){
                    throw(createError(404, "student does not exist"))
                }

                res,send(result);
            
            }catch (error) {
                console.log(error.message)

                if(error instanceof mongoose.CastError){
                    return next(createError(400, "student does not exist"));
                }
                next(error);
            }
        },

        deleteStudent:async(req,res,next)=>{
            const id = req.params.id
            try{
                const student = await Student.findByIdAndRemove(id)
                if(!student){
                    throw(createError(404,"student does not exist"))
                }
                res.send(student);
            }catch (error){
                console.log(error.message)
                if(error instanceof mongoose.CastError){
                    next(createError(400, "Invalid student id"));
                    return;
                }
            }
        }

  
}
