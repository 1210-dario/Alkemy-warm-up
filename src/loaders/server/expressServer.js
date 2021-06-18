const express = require('express');
const logger = require('../logger');
const morgan = require('morgan');
const config = require('../../config');

class ExpressServer{
    //Constructor para iniciar el Servidor
    constructor(){
        //Establezco app como ejecucion de express
        this.app = express();
        //Establezco el puerto a utilizar guardado en config
        this.port = config.port;
        //Defino el path para las rutas
        this.basePathPost = `${config.api.prefix}/posts`;
        //Los middlewares me sirven para propiedades que debe tener en cuenta mi app, por ejemplo utilizar express.json
        this._middlewares();

        this._routes();

        this._notFound();
        this._errorHandler();

    }

    _middlewares(){
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
    }

    _routes(){

        this.app.head("/status", (req, res) =>{
            res.status(200).end();
        })

        this.app.use(this.basePathPost, require('../../routes/posts'));
    }
    //Se instancia el error como Middleware y con la funcion next() sigue el codigo, en este caso se persiste el error
    _notFound(){
        this.app.use((req, res, next)=>{
            const err = new Error('Not Found');
            err.code = 404;
            next(err);
        });
    }
    //Se maneja el error que obtenemos del Middleware _notFound
    _errorHandler(){
        this.app.use((err, req, res, next)=>{
            const code = err.code || 500;
            logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            logger.error(err.stack);
            const body = {
                error: {
                    code,
                    message: err.message,
                    detail: err.data
                }
            };
            res.status(code).json(body);
        });
    }
    //Esta funcion o metodo de la clase ExpressServer me inicia el servidor en el puerto indicado. Es decir agrega el app.listen
    async start() {
        
        this.app.listen(this.port,(error)=>{
            if(error){
                logger.error(error);
                process.exit(1);
                return;
            }
        })
    }

}

module.exports = ExpressServer;
