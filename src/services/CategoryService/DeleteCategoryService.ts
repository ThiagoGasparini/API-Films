import { getRepository } from 'typeorm';
import RedisCache from '@shared/cache/RedisCache';
import { Category } from '@modules/categories/typeorm/entities/Category';

export class DeleteCategoryService {
  async execute(id: string) {
    const repo = getRepository(Category);

    if (!(await repo.findOne(id))) {
      return new Error('Category does not exists!');
    }

    const redisCache = new RedisCache();

    await redisCache.invalidate('api-categories-CATEGORY_LIST');

    await repo.delete(id);
  }
}
