import { Router } from 'express';
import multer from 'multer';

import { AuthenticateUserController } from '../modules/accounts/useCases/authenticationUser/AuthenticateUserController';



const authenticateRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);

export { authenticateRoutes }