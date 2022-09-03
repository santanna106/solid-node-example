import { Router } from 'express';
import { categoriesRoutes } from './cateogries.routes';
import { specificationRoutes } from './spacification.routes';

const router = Router();

router.use("/categories",categoriesRoutes);

router.use("/spcifications",specificationRoutes);

export { router };
