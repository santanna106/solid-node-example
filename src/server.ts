import express from 'express';
import swaggerUI from 'swagger-ui-express';
import { router } from './routes';
import { AppDataSource } from './database/data-source';
 
AppDataSource.initialize().then(() => {

    const swaggerFile = require('./swagger.json');

    const app = express();

    app.use(express.json());

    app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerFile));

    app.use(router);

    console.log("Iniciou")

    app.listen(3333);

}).catch((error) => { console.log('Erro: ',error)});


