const ExpressServer = require('./server/expressServer');
const sequelize = require('./sequelize');
const logger = require('./logger');
const config = require('../config');

module.exports  = async () =>{
    try{
    await sequelize.authenticate();
    require('../models/post');
    require('../models/categoryTypes');
    //sequelize.sync({ force: true });
    sequelize.sync();
    logger.info('DB loaded and connected')
    const server = new ExpressServer();
    logger.info('Express Loaded');
    
    server.start();
    logger.info(
        `#######################################
         Server listening on port: ${config.port}
      ########################################`
        );
    }catch(error){
        console.log('Unable to connect to the database', error);
    }
}
