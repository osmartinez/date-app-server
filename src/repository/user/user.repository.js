const User = require('../../model/user.model')
const mongoose = require('mongoose')
const encryption = require('../../lib/encryption')
const { encrypt } = require('../../lib/encryption')

function UserRepository() {

    function test(req, res, next) {
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

    async function findAll(req, res, next) {
        const users = await User.find()
        res.json(users)
    }

    
    // {"username":"omartinez@test.com","password":"123123"}
    async function signIn(req,res,next){
        const { username, password} = req.body
        console.log(req.body)
        try {
            const user = await User.findOne({username: username})
            if(user != null){
                const resultMatch = await encryption.match(plainPassword=password, hash=user.password)
                if(resultMatch){
                    // user found && correct pwd
                    res.status(200).json({
                        message: 'Auth succesful'
                    })
                }
                else{
                    // incorrect pwd
                    res.sendStatus(401)
                }
            }
            else{
                // user not found
                res.sendStatus(401)
            }
        } catch (error) {
            console.error(error)
            res.sendStatus(401)
        }
    }

    // {"username":"omartinez@test.com","password":"123123", "birthDate":"1996-12-08"}
    async function signUp(req, res, next) {
        const { username, password, birthDate } = req.body
        try {
            const hash = await encryption.encrypt(password)
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                email: username,
                username: username,
                password: hash,
                birthDate: birthDate,
                isBlocked: false,
                registerDate: new Date(),
            })
            await newUser.save()
            // cleans the pwd to not send it to client
            newUser.password = ''
            res.json(newUser)
        } catch (err) {
            console.error(err)
            res.sendStatus(500)
        }
    }

    return {
        test,
        findAll,
        signUp,
        signIn,
    }
}

module.exports = UserRepository