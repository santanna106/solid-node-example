import { inject,injectable } from 'tsyringe';
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest{
   name:string;
   description:string; 
}

@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository){

    }

    async execute({ name,description} : IRequest): Promise<void> {
        const categoryalreadyExistis = await this.categoriesRepository.findByName(name);
       
        if(categoryalreadyExistis)
        {
            //throw new Error("Category already exists!");
            console.log("Category already exists!");
        } else {
            this.categoriesRepository.create({name,description});
        }
    
        
    }
}

export { CreateCategoryUseCase }