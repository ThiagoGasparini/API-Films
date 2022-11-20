import { getRepository } from 'typeorm'
import { Category } from "@modules/categories/typeorm/entities/Category";
import AppError from '@shared/errors/AppError';

export class GetByIdCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      throw new AppError('Category does not exists');
    }

    return category;
  }
}