const bcrypt = require('bcrypt')

module.exports = {
    async encrypt(plainPassword){
        return await bcrypt.hash(plainPassword, 10)
    },
    
    async match(plainPassword, hash){
        return await bcrypt.compare(plainPassword,hash)
    }
}