
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { Category } from '../../entities/Category';

class ListCategoryUseCase {

    constructor(private categoriesRepository: CategoriesRepository){

    }

    execute() : Category[] {
        const allCategories = this.categoriesRepository.list();

        return allCategories;
    }
}

export { ListCategoryUseCase }