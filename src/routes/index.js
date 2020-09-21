const express = require('express')

function eRoutes(){
    const router = express.Router()

    require('../repository/chat/chat.routes')(router)
    require('../repository/user/user.routes')(router)

    return router
}

module.exports = eRoutes