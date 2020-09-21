const UserRepository = require('./user.repository')
//const dbContext = 

module.exports = function (router){
    const userRepo = UserRepository(/*dbContext*/)

    router.route('/users')
    .get(userRepo.findAll)

    //router.route('/chat/enviar')
}