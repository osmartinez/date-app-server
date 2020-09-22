const User = require('../../model/user.model')
const mongoose = require('mongoose')
const encryption = require('../../lib/encryption')
const jwt = require('jsonwebtoken')
const config = require('../../../config')
const env = process.env.NODE_ENV || 'production'

function UserRepository() {

    async function findAll(req, res, next) {
        const users = await User.find()
        res.json(users)
    }


    // {"username":"omartinez@test.com","password":"123123"}
    async function signIn(req, res, next) {
        const { username, password } = req.body
        console.log(req.body)
        try {
            const user = await User.findOne({ username: username })
            if (user != null) {
                const resultMatch = await encryption.match(plainPassword = password, hash = user.password)
                if (resultMatch) {
                    const token = jwt.sign({
                        email: user.email,
                        userId: user._id,
                    }, config[env].server.JWT_KEY,
                        {
                            expiresIn: "1h",
                        })
                    // user found && correct pwd
                    res.status(200).json({
                        message: 'Auth succesful',
                        token: token,
                    })
                }
                else {
                    // incorrect pwd
                    res.sendStatus(401)
                }
            }
            else {
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
        findAll,
        signUp,
        signIn,
    }
}

module.exports = UserRepository