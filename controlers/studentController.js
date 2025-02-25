const student = require ('../modules/student');      //This the section responsible fror adding a table
const createError = require('http-errors');            //This is the section responsible for creating an error

modules.exports={
    getAllstudents: async(req, res, next)=>{
        try{
            const result = await Student.find()
            res.send(result)
        } catch (error){
            console.log(error.message);
        }
    },

    AddStudent: async (req, res, next) => {
        try {
            const student = new Student (req.body);
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
    } 


};