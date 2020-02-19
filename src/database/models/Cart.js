const db = require("../connector");
const sequelize =require('sequelize');

module.exports =db.define(
    "Cart",
    {
        "count":{
            type: sequelize.DOUBLE
        }
    }
);