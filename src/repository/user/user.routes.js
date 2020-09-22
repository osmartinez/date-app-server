const UserRepository = require('./user.repository')
const checkAuth = require('../../middleware/check-auth')

module.exports = function (router){
    const userRepo = UserRepository(/*dbContext*/)

    router.route('/users')
    .get(checkAuth,userRepo.findAll)

    router.route('/users/signUp')
    .post(userRepo.signUp)

    router.route('/users/signIn')
    .post(userRepo.signIn)

}