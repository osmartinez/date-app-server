const express = require('express')
const env = process.env.NODE_ENV || 'production'
const config = require('./config')
const morgan = require('morgan')
const port = config[env].server.port

const app = express()


if (env === 'development'){
    app.use(morgan('dev'))
}

const router = require('./src/routes/index')()
app.use('/api', router)

app.listen(port, ()=>{
    console.log(`[${env}] REST service up and running on port ${port}`)
})