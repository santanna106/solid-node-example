import { Spacification } from "../entities/Spacification";


interface ISpecificationDTO{
    name:string;
    description:string;
}

interface ISpecificationRepository {
    findByName(name:string): Promise<Spacification>;
    list():Promise<Spacification[]>;
    create({name,description}:ISpecificationDTO): Promise<void>;
}

export { ISpecificationRepository,ISpecificationDTO };