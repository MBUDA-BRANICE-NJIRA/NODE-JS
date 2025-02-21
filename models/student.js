const mongoose = require('mongoose');
const  Schema  = mongoose.Schema;

//The schema for the model
const studentSchema = new Schema({
    firstname:{
        type:String,
        required:[true, ' first name is rewuired']
    },
    lastname:{
        type:String,
        required:[true, 'last name is required']
    },
    gender:{
        type:String,
    }
});

const student = mongoose.model('student', studentSchema);//=>Create a model that is going to represent our collection i the DB
module.exports = student;//=>Here is where Exporting this file do that we can use it in our files