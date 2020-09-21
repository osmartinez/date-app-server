const config = require('../../config')
const env = process.env.NODE_ENV || 'production'




function GenericRepository(){
    function execute(dbContext, parameters, req,res,next){
        res.json({"test":"test"})
    }

    return {
        execute
    }
}

module.exports = GenericRepository