const dotenv = require('dotenv');

const envFound = dotenv.config();

//This Validates if the .env file exists
if(!envFound){
    throw new Error("Couldn't find .env file.");
}
//Enviroment we are currently working on by Default its development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//Export an object with the propperties we need for the aplication
module.exports={
    //This is the port we use to launch the app
    port: process.env.PORT,
    api: {
        prefix: '/api/v1'
    },
    log:{
        level: process.env.LOG_LEVEL
    },
    database:{
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME
    }

};