import { AppDataSource } from '../../../../database/data-source';

import { Repository } from "typeorm";
import { IUserRepository } from '../IUserRepository';
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from '../../entities/User';



class UserRepository implements IUserRepository {
    private repository: Repository<User>;
    
    constructor(){
        this.repository = AppDataSource.getRepository(User);
    }


    async create({name,username,email,driver_license,password}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            name,
            username,
            email,
            driver_license,
            password,
            isAdmin:false
        });
        await this.repository.save(user);
    }

    async list() : Promise<User[]>{
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(username:string) : Promise<User>{
        
        const user = await this.repository.findOneBy({     
            username: username,
        });
        return user;
    }

    async findById(id:string) : Promise<User>{
        
        const user = await this.repository.findOneBy({
            id:id
        })
        return user;
    }

}

export { UserRepository }