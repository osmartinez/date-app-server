const GenericRepository = require('../generic.repository')()

function ChatRepository(){

    function test (req,res,next){
        GenericRepository.execute(null, req.params, req, res,next)
    }

    return {
        test
    }
}

module.exports = ChatRepository