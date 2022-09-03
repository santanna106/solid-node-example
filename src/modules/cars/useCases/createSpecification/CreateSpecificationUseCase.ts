
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';

interface IRequest{
   name:string;
   description:string; 
}

class CreateSpecificationUseCase {

    constructor(private specificationRepository: SpecificationRepository){

    }

    execute({ name,description} : IRequest){
        const specificationAlreadyExistis = this.specificationRepository.findByName(name);
    
        if(specificationAlreadyExistis)
        {
            throw new Error("Specification already exists!");
        }
    
        this.specificationRepository.create({name,description});
    }
}

export { CreateSpecificationUseCase }