import { Repository,FindOneOptions } from "typeorm";
import { AppDataSource } from '../../../../database/data-source';
import { Spacification } from '../../entities/Spacification';
import { ISpecificationRepository, ISpecificationDTO } from '../ISpecificationRepository';


class SpecificationRepository implements ISpecificationRepository {
   


    private repository: Repository<Spacification>;
    
    constructor(){
        this.repository = AppDataSource.getRepository(Spacification);
    }

    /*
    public static getInstance() : CategoriesRepository{
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        } 

        return CategoriesRepository.INSTANCE;
    }*/

    async create({ name,description }: ISpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name
        });
        await this.repository.save(specification);
    }

    async list() : Promise<Spacification[]>{
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByName(name:string) : Promise<Spacification>{
        console.log("Name Repository: ",name );
        const specification = await this.repository.findOneBy({     
                name: name,
        });
        return specification;
    }

}

export { SpecificationRepository }