const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lectureSchema = new Schema({
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


const lecture = mongoose.model('lecture', lectureSchema);

module.exports = lecture;