import { getRepository } from "typeorm";
import { Film } from "@modules/categories/typeorm/entities/Film";
import RedisCache from '@shared/cache/RedisCache';

export class DeleteFilmService {
  async execute(id: string) {
    const repo = getRepository(Film);

    if (!(await repo.findOne(id))) {
      return new Error('Category does not exists!');
    }

    const redisCache = new RedisCache();

    await redisCache.invalidate('api-films-FILM_LIST');

    await repo.delete(id);
  }
}