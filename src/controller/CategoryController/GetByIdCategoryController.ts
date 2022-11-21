import { Request, Response } from 'express';
import { GetByIdCategoryService } from '../../services/CategoryService/GetByIdCategoryService';

export class GetByIdCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetByIdCategoryService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
