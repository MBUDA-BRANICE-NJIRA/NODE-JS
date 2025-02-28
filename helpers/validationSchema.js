///This will help validate the data that is being sent to the server

const Joi = require('joi');

const authModel = Joi.object().keys ({
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(6).required(),
})
module.exports = {
    authModel
}