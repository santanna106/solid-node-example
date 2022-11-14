import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";



interface IUserRepository {
    findByName(name:string): Promise<User>;
    list():Promise<User[]>;
    create(data:ICreateUserDTO): Promise<void>;
    findById(id:string): Promise<User>;
}

export { IUserRepository,ICreateUserDTO };