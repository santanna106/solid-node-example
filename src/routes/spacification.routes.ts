import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listCategoryController } from '../modules/cars/useCases/listCategories';

const specificationRoutes = Router();

specificationRoutes.post("/", (request,response) => {
    return createSpecificationController.handle(request,response);
});

specificationRoutes.get("/", (request,response) => {
    return listCategoryController.handle(request,response);
});

export { specificationRoutes }