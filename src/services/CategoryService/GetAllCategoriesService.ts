import { getRepository } from 'typeorm';
import { Category } from '@modules/categories/typeorm/entities/Category';
import RedisCache from '@shared/cache/RedisCache';

export class GetAllCategoriesService {
  async execute() {
    const repo = getRepository(Category);
    const redisCache = new RedisCache();

    let category = await redisCache.recover<Category[]>(
      'api-categories-CATEGORY_LIST'
    );

    if (!category) {
      category = await repo.find();
      await redisCache.save('api-categories-CATEGORY_LIST', category);
    }

    return category;
  }
}
