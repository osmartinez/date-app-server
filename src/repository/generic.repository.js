const mongoose = require('mongoose');
const config = require('../../config')
const env = process.env.NODE_ENV || 'production'



mongoose.connect('mongodb://' + config[env].database.host + '/' +config[env].database.name);

function GenericRepository(){
    function execute(dbContext, parameters, req,res,next){
        res.json({"test":"test"})
    }

    return {
        execute
    }
}

module.exports = GenericRepository