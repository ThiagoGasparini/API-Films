import { getRepository } from 'typeorm';
import RedisCache from '@shared/cache/RedisCache';
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

    const redisCache = new RedisCache();

    const category = repo.create({
      name,
      description,
    });

    await redisCache.invalidate('api-categories-CATEGORY_LIST');

    await repo.save(category);
    return category;
  }
}
