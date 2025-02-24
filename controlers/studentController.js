const student = require('../modules/student');      //This the section responsible fror adding a table

modules.exports={
    AddStudent: async(req, res, next) => {
        try {
            const student = new Student(req.body);
            const result = await student.save();

        }
        catch (error) {
            console.log(error.message);
            // if(error.name === 'ValidationError'){
            //     next(createError(422,error.message))
            //     return;
            // }
        }
        next(error)
    } 


};