import { Router } from 'express';
import { categoriesRoutes } from './cateogries.routes';
import { specificationRoutes } from './spacification.routes';
import { usersRoutes } from './users.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use("/categories",categoriesRoutes);

router.use("/specifications",specificationRoutes);

router.use("/account",usersRoutes);

router.use(authenticateRoutes);

export { router };
