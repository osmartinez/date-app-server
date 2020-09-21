//const GenericRepository = require('../generic.repository')()
const User = require('../../model/user.model')

function UserRepository(){

    function test (req,res,next){
        const user = new User({
            id: 1,
            username: 'osmartinez',
            email: 'its.osmartinez@gmail.com',
            password: '123123',
            birthDate: '1996-12-08',
            geolocation: '123.1;-12;33',
            registerDate: '2020-09-21',
            lastLoginDate: null,
            isBlocked: false
        })
        user.save()
    }

    async function findAll(req,res,next){
        const users = await User.find()
        res.json(users)
    }

    return {
        test,
        findAll,
        
    }
}

module.exports = UserRepository