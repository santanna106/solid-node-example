import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/CreateUserController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';


const usersRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createUserController = new CreateUserController();

const listCategoryController = new ListCategoryController();

usersRoutes.post("/", createUserController.handle);


usersRoutes.get("/", (request,response) => {
    return listCategoryController.handle(request,response);
});



export { usersRoutes }