import { Response, Request } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';
import { container } from 'tsyringe';

class ListCategoryController{

    async handle(request: Request, response:Response) : Promise<Response>{
      
        const listCategoryUseCase = container.resolve(ListCategoryUseCase)
        const  allCategories = await listCategoryUseCase.execute();
    

        return response.json(allCategories);
    }
}

export { ListCategoryController }