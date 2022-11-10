import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';

import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);


categoriesRoutes.get("/", (request,response) => {
    return listCategoryController.handle(request,response);
});


categoriesRoutes.post("/import", upload.single("file"),importCategoryController.handle);

export { categoriesRoutes }