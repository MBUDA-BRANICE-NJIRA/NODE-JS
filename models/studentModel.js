const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    gender: {
        type: String
    }
});


const Student = mongoose.model('student', studentSchema);

module.exports = Student;