import "reflect-metadata";
import express, { Request,Response,NextFunction } from 'express';
import "express-async-errors";
import swaggerUI from 'swagger-ui-express';
import { router } from './routes';
import { AppDataSource } from './database/data-source';

import './shared/container';
import { AppError } from "./errors/AppError";
 
AppDataSource.initialize().then(() => {

    const swaggerFile = require('./swagger.json');

    const app = express();

    app.use(express.json());

    app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerFile));

    app.use(router);

    app.use((err:Error,request: Request,response:Response,next:NextFunction) => {
        if(err instanceof AppError){
            return response.status(err.statusCode).json({
                message:err.message
            })
        }

        return response.status(500).json({
            status:"error",
            messsage:`Internal server error - ${err.message}`
        })
    })

    console.log("Iniciou")

    app.listen(3333);

}).catch((error) => { console.log('Erro: ',error)});


