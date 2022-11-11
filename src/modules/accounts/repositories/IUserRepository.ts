import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";



interface IUserRepository {
    findByName(name:string): Promise<User>;
    list():Promise<User[]>;
    create(data:ICreateUserDTO): Promise<void>;
}

export { IUserRepository,ICreateUserDTO };