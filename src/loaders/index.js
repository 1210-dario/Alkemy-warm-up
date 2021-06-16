const ExpressServer = require('./server/expressServer');
const logger = require('./logger');
const config = require('../config');

module.exports  = async () =>{

    const server = new ExpressServer();
    logger.info('Express Loaded');
    
    server.start();
    logger.info(
        `#######################################
         Server listening on port: ${config.port}
      #######################################`
         );
}
