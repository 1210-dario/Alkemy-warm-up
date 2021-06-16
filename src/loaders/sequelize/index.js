const { Sequelize } = require('sequelize');
const config = require('../../config');


const sequelize = new Sequelize(
    config.database.name,
    config.database.username,
    config.database.password,
    {
    dialect: 'mssql',
    host: config.database.host,
    port: config.database.port, 
}); 





module.exports = sequelize;


