
import { inject, injectable } from 'tsyringe';
import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

interface IRequest{
   name:string;
   description:string; 
}

@injectable()
class CreateSpecificationUseCase {

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository){

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