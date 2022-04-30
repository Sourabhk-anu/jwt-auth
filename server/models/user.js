const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email: {type: String, required: true},
    password: {type: String, required: true},
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY, {
        expiresIn:'7d'
    })
    return token
}

const User = mongoose.model('User',userSchema)

const validate = (data) => {
    const schema = Joi.object({
        fullName: Joi.string().required().label('name'),
        email: Joi.string().required().label('email'),
        password: Joi.string().required().label('password'),
    })
    return schema.validate(data)
}

module.exports = {User, validate}