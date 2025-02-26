
const Lecture = require('../models/lectureModel')
const mongoose = require('mongoose')
module.exports ={
    getAllLecture: async(req,res,next)=>{
        try{
            const result = await Lecture.find()
            res.send(result)
        } catch (error){
            console.log(error.message);
        }
    },

    AddLecture: async(req, res, next)=>{
        try{
            const Lecture = new Lecture(req.body)
            const result = await Lecture.save();
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
        getLecture: async(req,res,next)=>{
            const id = req.params.id;
            try{
                const Lecture = await lecture.findById(id)
                if(!Lecture){
                    throw(createError(404, "Lecture does not exist"))
                }
                res.send(Lecture)
            }catch (error) {
                console.log(error.message);
                if(error instanceof mongoose.CastError){
                    next(createError(400, "Invalid student id"));
                    return;
                }
                next(error);
            }
        },

        updateLecture: async (req,res,next)=>{
            try{
                const id = req.params.id;
                const update = req.body;
                const options ={new: true}
                const result = await Lecture.findByIdandUpdate(id, update, options)

                if (!result){
                    throw(createError(404, "Lecture does not exist"))
                }

                res,send(result);
            
            }catch (error) {
                console.log(error.message)

                if(error instanceof mongoose.CastError){
                    return next(createError(400, "Lecture does not exist"));
                }
                next(error);
            }
        },

        deleteLecture:async(req,res,next)=>{
            const id = req.params.id
            try{
                const student = await Lecture.findByIdAndRemove(id)
                if(!Lecture){
                    throw(createError(404,"lecture does not exist"))
                }
                res.send(student);
            }catch (error){
                console.log(error.message)
                if(error instanceof mongoose.CastError){
                    next(createError(400, "Invalid lecture id"));
                    return;
                }
            }
        }

  
}
