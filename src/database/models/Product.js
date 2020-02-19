const db = require("../connector");
const sequelize =require('sequelize');

module.exports = db.define(
    "Product",
    {
        "name":{
            type: sequelize.STRING
        },
        "price":{
            type:sequelize.DOUBLE
        }
    }
);