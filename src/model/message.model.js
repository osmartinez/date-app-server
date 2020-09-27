const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    chatId: mongoose.Schema.Types.ObjectId,
    body: {type: String},
    sentAt: {type: Date, default: new Date()},
    readAt: {type:Date}
}, {collection: 'messages'})

module.exports = mongoose.model('Message', messageSchema)