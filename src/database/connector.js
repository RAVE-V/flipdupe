const sequelize = require('sequelize');
const config = require('../config/config');

const db = new sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
        host:config.db.host,
        dialect : "mysql",
        operatorAliases: false,
        logging: config.db.logging,
        pool:{
                max:10,
                min:0,
                acquire: 30000,
                idle: 10000
        }
    }


)

module.exports =db;