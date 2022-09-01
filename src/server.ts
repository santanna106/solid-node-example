import express from 'express';
import { categoriesRoutes } from './routes/cateogries.routes';
import { specificationRoutes } from './routes/spacification.routes';

const app = express();

app.use(express.json());

app.use("/categories",categoriesRoutes);

app.use("/spcifications",specificationRoutes);

app.get('/', (request, response) => response.json({ message: 'Hello World' }));

app.listen(3333);
