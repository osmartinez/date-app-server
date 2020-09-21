const ChatRepository = require('./chat.repository')
//const dbContext = 

module.exports = function (router){
    const chatRepo = ChatRepository(/*dbContext*/)

    router.route('/chat')
    .get(chatRepo.test)

    //router.route('/chat/enviar')
}