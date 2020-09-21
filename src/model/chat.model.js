const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    id:{
        type: Number,
        unique: true,
        required: true,
    },
    userFrom:{

    },
    userTo:{

    },
    sendDate:{
        type:Date,
        required: true,
    },
    isRead:{
        type:Boolean,
        required: true,
    }
}, {collection: 'chats'})

module.exports = mongoose.model('Chat', chatSchema)