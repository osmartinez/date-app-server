const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id:{
        type: Number,
        unique: true,
        required: true,
    },
    username :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },
    birthDate:{
        type:Date,
        required:true,
    },
    geolocation:{
        type:String,
    },
    registerDate:{
        type:Date,
        required: true,
    },
    lastLoginDate: {
        type:Date,
    },
    isBlocked:{
        type: Boolean,
        required: true,
    }
}, {collection: 'users'})

module.exports = mongoose.model('User', userSchema)