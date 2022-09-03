
import { SpecificationRepository } from '../repositories/implementations/SpecificationRepository';

interface IRequest{
   name:string;
   description:string; 
}

class CreateSpacificationService {

    constructor(private specificationsRepository: SpecificationRepository){

    }

    execute({ name,description} : IRequest){
        const specificationAreadyExistis = this.specificationsRepository.findByName(name);
    
        if(specificationAreadyExistis)
        {
            throw new Error("Spacification already exists!");
        }
    
        this.specificationsRepository.create({name,description});
    }
}

export { CreateSpacificationService }