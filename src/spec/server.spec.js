const request = require('request')
const mongoose = require('mongoose')
const env = process.env.NODE_ENV || 'production'
const config = require('../config')
const port = config[env].server.port


mongoose.connect('mongodb://' + config[env].database.host + '/' + config[env].database.name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});


describe('drop database', () => {
    it('should drop', (done) => {
        mongoose.connection.db.dropDatabase(
            () => {
                console.log(`${config[env].database.name} database dropped`)
                done()
            }
        )
    })

})

