const { default: mongoose } = require('mongoose');
const student = require ('../modules/student');      //This the section responsible fror adding a table
const createError = require('http-errors');            //This is the section responsible for creating an error

modules.exports= {
    getAllStudents: async(req, res, next)=>{
        try{
            const result = await student.find() //The code that adds all the students
            res.send(result)
        } catch (error){
            console.log(error.message);
        }
    },

    AddStudent: async (req, res, next) => {
        try {
            const student = new student (req.body);
            const result = await student.save ();

        }
        catch (error) {
            console.log(error.message);
            if(error.name === 'ValidationError'){
                next(createError(422,error.message))
                return;
            }
        }
        next (error)
    },
    getStudent: async(req, res, next)=>{
        const id = req.params.id;
        if (!student) {
            throw(createError(404, "student does not exist"))
        }
        res.send(student)
    }, catch(error){
        console.log(error.message);
        if (error instanceof mongoose.CastError) {
            next(createError(400, "Invalid student id"));
            return;
        }
        next(error);
    }

};