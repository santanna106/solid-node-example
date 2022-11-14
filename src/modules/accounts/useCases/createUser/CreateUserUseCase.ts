import { inject,injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import { ICreateUserDTO, IUserRepository } from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository){

    }

    async execute({ name,username,driver_license,email,password} : ICreateUserDTO): Promise<void> {
        const useralreadyExistis = await this.userRepository.findByName(username);
       
        if(useralreadyExistis)
        {
            //throw new Error("Category already exists!");
            console.log("User already exists!");
        } else {

            const passwordHash = await hash(password,8);

           await this.userRepository.create({name,username,driver_license,email,password:passwordHash});
        }
    
        
    }
}

export { CreateUserUseCase }