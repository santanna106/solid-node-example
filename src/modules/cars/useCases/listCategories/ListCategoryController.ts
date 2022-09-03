import { Response, Request } from 'express';
import { ListCategoryUseCase } from './ListCategoryUseCase';

class ListCategoryController{

    constructor(private listCategoryUseCase: ListCategoryUseCase){

    }

    handle(request: Request, response:Response){
      

        const  allCategories = this.listCategoryUseCase.execute();
    

        return response.json(allCategories);
    }
}

export { ListCategoryController }