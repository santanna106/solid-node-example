import { Router } from 'express';

import { CreateSpacificationService } from '../modules/cars/services/CreateSpacificationService';
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';

const specificationRoutes = Router();
const spacrificationRepository = new SpecificationRepository();

specificationRoutes.post("/", (request,response) => {
    const { name,description } = request.body;

    const createCategoryService = new CreateSpacificationService(spacrificationRepository);

    createCategoryService.execute({name,description});
   

    return response.status(201).send();
})


specificationRoutes.get("/", (request,response) => {
    const all = spacrificationRepository.list();
    return response.json(all);
})

export { specificationRoutes }