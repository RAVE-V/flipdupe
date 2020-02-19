const db = require("../connector");
const sequelize =require('sequelize');

module.exports =db.define(
    "User",
    {
        "name":{
            type: sequelize.STRING
        },
        "password":{
            type:sequelize.STRING
        }
    }
);