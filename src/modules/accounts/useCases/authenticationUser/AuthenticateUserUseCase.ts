import { inject,injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { AppError } from '../../../../errors/AppError';

import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest{
    username:string;
    password:string
}

interface IResponse{
    user:{
        name:string;
        username:string;
    }
    token:string;
}


@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository){

    }

    async execute({username,password} : IRequest): Promise<IResponse> {
        const useralreadyExistis = await this.userRepository.findByName(username);
       
        if(!useralreadyExistis)
        {
            throw new AppError("User name or password incorrect!");
            
        } else {

            const passworMatch = await compare(password,useralreadyExistis.password);
            if(!passworMatch){
                throw new AppError("User name or password incorrect!");
            }

            const token = sign({},"3e990f53bc110e3eef77d2a0a377d7c6",{
                subject:useralreadyExistis.id,
                expiresIn:"1d"
            });

           return {
            user: {
                name:useralreadyExistis.name,
                username:useralreadyExistis.username
            },
            token:token
           }
        }
    
        
    }
}

export { AuthenticateUserUseCase }