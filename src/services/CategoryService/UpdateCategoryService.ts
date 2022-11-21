import { getRepository } from 'typeorm'
import RedisCache from '@shared/cache/RedisCache';
import { Category } from "@modules/categories/typeorm/entities/Category";
import AppError from '@shared/errors/AppError';

type CategoryUpdateRequest = {
  id: string;
  name: string;
  description: string;
};

export class UpdateCategoryService {
  async execute({id, name, description}: CategoryUpdateRequest) {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      throw new AppError('Category does not exists');
    }

    const redisCache = new RedisCache();

    await redisCache.invalidate('api-categories-CATEGORY_LIST');

    category.name = name ? name : category.name;
    category.description = description ? description : category.description;

    await repo.save(category);

    return category;
  }
}