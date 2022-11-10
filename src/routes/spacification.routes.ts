import { Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/implementations/SpecificationRepository';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listCategoryController = new ListCategoryController();

specificationRoutes.post("/", createSpecificationController.handle);

specificationRoutes.get("/", (request,response) => {
    return listCategoryController.handle(request,response);
});

export { specificationRoutes }