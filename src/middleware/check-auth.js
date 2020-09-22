const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'production'
const config = require('../../config')

module.exports = function(req,res,next){
    try {
        let authorization = req.headers.authorization
        if(authorization!=null){
            authorization = authorization.split(" ")
            if(authorization.length == 2){
                authorization = authorization[1]
                const decoded = jwt.verify(authorization, config[env].server.JWT_KEY)
                req.userData = decoded
                return next()
            }
        }
        return res.status(401).json({
            message: 'Auth failed'
        })
    } catch (err) {
        console.error(err)
        return res.status(401).json({
            message: 'Auth failed'
        })
    }
}