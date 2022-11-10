import { response } from 'express';
import { AppDataSource } from '../../../../database/data-source';
import { Category } from '../../entities/Category';
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

import { Repository,FindOneOptions } from "typeorm";



class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;
    
    constructor(){
        this.repository = AppDataSource.getRepository(Category);
    }

    /*
    public static getInstance() : CategoriesRepository{
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        } 

        return CategoriesRepository.INSTANCE;
    }*/

    async create({ name,description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        });
        await this.repository.save(category);
    }

    async list() : Promise<Category[]>{
        const categories = await this.repository.find();
        return categories;
    }

    async findByName(name:string) : Promise<Category>{
        console.log("Name Repository: ",name );
        const category = await this.repository.findOneBy({     
                name: name,
        });
        return category;
    }

}

export { CategoriesRepository }