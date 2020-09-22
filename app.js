const express = require('express')
const env = process.env.NODE_ENV || 'production'
const config = require('./config')
const morgan = require('morgan')
const port = config[env].server.port
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongoose.connect('mongodb://' + config[env].database.host + '/' + config[env].database.name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

if (env === 'development') {
    app.use(morgan('dev'))
}

const router = require('./src/routes/index')()
app.use('/api', router)

app.listen(port, () => {
    console.log(`[${env}] REST service up and running on port ${port}`)
})