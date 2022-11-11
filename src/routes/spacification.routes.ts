import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationController } from '../modules/cars/useCases/listSpecifications/ListSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", listSpecificationController.handle);

export { specificationRoutes }