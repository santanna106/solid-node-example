import { Response, Request } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { container } from 'tsyringe';

class ImportCategoryController{

   

    handle(request: Request, response:Response){
        const { file } = request;
        
        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

        importCategoryUseCase.execute(file);
   
        return response.status(201).send();
    }
}

export { ImportCategoryController }