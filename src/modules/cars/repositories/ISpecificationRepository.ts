import { Spacification } from "../entities/Spacification";


interface ISpecificationDTO{
    name:string;
    description:string;
}

interface ISpecificationRepository {
    findByName(name:string):Spacification;
    list():Spacification[];
    create({name,description}:ISpecificationDTO): void;
}

export { ISpecificationRepository,ISpecificationDTO };