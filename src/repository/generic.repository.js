function GenericRepository(){
    function execute(dbContext, parameters, req,res,next){
        res.json({"test":"test"})
    }

    return {
        execute
    }
}

module.exports = GenericRepository