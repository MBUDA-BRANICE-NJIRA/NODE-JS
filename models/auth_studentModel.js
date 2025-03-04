//Define a model that is going to haave username and password fields
const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

const authModelSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Passsword is required']
    },
   
});

//hashing the password before saving it to the database
//this function is going to run before the save operation
// UserSchema.pre('save', async function(next){
//     try{
//         const salt = await bcrypt.genSalt(10);
//         const passwordHash = await bcrypt.hash(this.password, salt);
//         this.password = hashedPassword;
//         next();
//     }catch(error){
//         next(error);
//     }
// });

const authModel = mongoose.model('studentAuth', authModelSchema, 'studentAuth');

module.exports =authModel;