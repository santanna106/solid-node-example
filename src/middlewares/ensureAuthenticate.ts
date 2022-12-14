import { NextFunction, Request,Response } from 'express';
import { verify } from "jsonwebtoken";
import { AppError } from '../errors/AppError';
import { UserRepository } from '../modules/accounts/repositories/implementations/UserRepository';

interface IPlayload {
    sub:string;
}

export async function ensureAuthenticated(request:Request,response:Response,next:NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        throw new AppError("Token missing",401);
    }

    const [ ,token ] = authHeader.split(" ");
    try{
        const { sub : user_id } = verify(token,'3e990f53bc110e3eef77d2a0a377d7c6') as IPlayload
       
        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id);

        if(!user){
            throw new AppError("User does not exists",401);
        }

        request.user = {
           id:user_id
        }

        next();
    } catch {
        throw new AppError("Invalid token !",401)
    }
    


}