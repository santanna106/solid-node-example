import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController';
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';


const usersRoutes = Router();

const upload = multer({
    dest: "avatar",
});

const createUserController = new CreateUserController();

const listCategoryController = new ListCategoryController();

const updateUserController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserController.handle);


usersRoutes.get("/", (request,response) => {
    return listCategoryController.handle(request,response);
});

usersRoutes.patch(
    "/avatar",
    upload.single("file"),
    updateUserController.handle);



export { usersRoutes }