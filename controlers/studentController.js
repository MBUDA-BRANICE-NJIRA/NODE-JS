const {response} = require('express');

const student = require ('../modules/student');      //This the section responsible fror adding a table

const createError = require('http-errors');

const { mongo, default: mongoose } = require('mongoose');


modules.exports= {

    getAllStudents: async(req, res, next)=>{
        try{
            const result = await student.find() //The code that adds all the students
            res.send(result)
        } catch (error){
            console.log(error.message);
        }
    },

    addStudent: async (req, res, next) => {
        try {
            const student = new student (req.body);
            const result = await student.save ();
            response.send(result);

        }
        catch (error) {
            console.log(error.message);
            // if(error.name === 'ValidationError'){
            //     next(createError(422,error.message))
            //     return;
            // }
        }
        next (error)
    },

   deleteStudet: async (req, res, next) => {
    const id = req.params.id

    try {
        const Student = await Student.findByIdAndRemove(id)
        if(!student){
            throw(createError(404, "student does not exist"))
        }
        res.send(student);

    }catch(error) {
        console.log(error.message)
        if(error instanceof mongoose.CastError){
            next(createError(400, "Invalid student id"));
            return;
        }
        
    }
},
};