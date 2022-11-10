
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { Category } from '../../entities/Category';
import { inject, injectable } from 'tsyringe';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

@injectable()
class ListCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){

    }

    async execute() : Promise<Category[]> {
        const allCategories = await this.categoriesRepository.list();

        return allCategories;
    }
}

export { ListCategoryUseCase }