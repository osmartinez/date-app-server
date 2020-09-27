module.exports = {
    development:{
        database:{
            name: 'dev',
            host: 'localhost',
            port: 27017,
        },
        server:{
            port: 3000,
            JWT_KEY: "secret",
        }
    },
    production:{
        database:{

        },
        server:{
            port: 3000,
            JWT_KEY: "@1@2@3XYZwt-TaB921@",
        }
    },
    test:{
        database:{
            name:'test',
            host: 'localhost',
            port: 27017,
        },
        
    }
}