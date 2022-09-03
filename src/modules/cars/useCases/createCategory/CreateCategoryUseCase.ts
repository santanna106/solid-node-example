
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';

interface IRequest{
   name:string;
   description:string; 
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository){

    }

    execute({ name,description} : IRequest){
        const categoryalreadyExistis = this.categoriesRepository.findByName(name);
    
        if(categoryalreadyExistis)
        {
            throw new Error("Category already exists!");
        }
    
        this.categoriesRepository.create({name,description});
    }
}

export { CreateCategoryUseCase }