import { getRepository } from 'typeorm';
import { Category } from '@modules/categories/typeorm/entities/Category';
import AppError from '@shared/errors/AppError';

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    if (!(await repo.findOne(id))) {
      throw new AppError('Category does not exists!');
    }

    await repo.delete(id);
  }
}
