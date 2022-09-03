
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { Category } from '../../model/Category';

class ListCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository){

    }

    execute() : Category[] {
        const allCategories = this.categoriesRepository.list();

        return allCategories;
    }
}

export { ListCategoryUseCase }