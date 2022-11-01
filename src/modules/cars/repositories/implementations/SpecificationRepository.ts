import { Spacification } from '../../entities/Spacification';
import { ISpecificationRepository, ISpecificationDTO } from '../ISpecificationRepository';


class SpecificationRepository implements ISpecificationRepository {
    private specifications: Spacification[];
    private static INSTANCE: SpecificationRepository;

    private constructor(){
        this.specifications = [];
    }

    public static getInstance() : SpecificationRepository{
        if(!SpecificationRepository.INSTANCE){
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        } 

        return SpecificationRepository.INSTANCE;
    }

    create({ name,description }: ISpecificationDTO): void {
        const specification = new Spacification();
        
        Object.assign(specification, {
                name,
                description,
                created_at: new Date()
            })
            this.specifications.push(specification);
      
    }

    list() : Spacification[]{
        return this.specifications;
    }

    findByName(name:string) : Spacification{
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }

}

export { SpecificationRepository }