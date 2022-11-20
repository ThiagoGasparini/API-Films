import { getRepository } from 'typeorm';
import { Category } from '@modules/categories/typeorm/entities/Category';
import AppError from '@shared/errors/AppError';

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    if (await repo.findOne({ name })) {
      throw new AppError('Category already exists');
    }

    const category = repo.create({
      name,
      description,
    });
    await repo.save(category);
    return category;
  }
}
