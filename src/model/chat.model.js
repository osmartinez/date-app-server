const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user1Id: mongoose.Schema.Types.ObjectId,
    user2Id: mongoose.Schema.Types.ObjectId,
    lastMessageBody: {type:String},
    lastMessageDate: {type: Date},
    userIdOfLastMessage:  mongoose.Schema.Types.ObjectId
}, {collection: 'chats'})

module.exports = mongoose.model('Chat', chatSchema)