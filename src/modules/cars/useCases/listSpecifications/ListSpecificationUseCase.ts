import { Spacification } from '../../entities/Spacification';
import { inject, injectable } from 'tsyringe';
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository';

@injectable()
class ListSpecificationUseCase {

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository){

    }

    async execute() : Promise<Spacification[]> {
        const allSpecifications = await this.specificationRepository.list();

        return allSpecifications;
    }
}

export { ListSpecificationUseCase }