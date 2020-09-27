const request = require('request')
const mongoose = require('mongoose')
const env = process.env.NODE_ENV || 'production'
const config = require('../config')


describe('connect and drop database',  () => {
    it('should connect', async (done) => {
        await mongoose.connect('mongodb://' + config[env].database.host + '/' + config[env].database.name, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        done()
    })
    it('should drop', (done) => {
        mongoose.connection.db.dropDatabase(
            () => {
                //console.log(`${config[env].database.name} database dropped`)
                done()
            }
        )
    })
})

