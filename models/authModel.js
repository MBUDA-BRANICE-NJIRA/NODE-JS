//Define a model that is going to haave username and password fields
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authModelSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'Firstname is required']
    },
    password: {
        type: String,
        required: [true, 'Lastname is required']
    },
   
});


const authModel = mongoose.model('lecture', authModelSchema);

module.exports = authSchema;