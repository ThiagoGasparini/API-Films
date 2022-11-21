import { Film } from '@modules/categories/typeorm/entities/Film';
import { getRepository } from 'typeorm';
import RedisCache from '@shared/cache/RedisCache';

export class GetAllFilmsService {
  async execute() {
    const repo = getRepository(Film);
    const redisCache = new RedisCache();

    let films = await redisCache.recover<Film[]>(
      'api-films-FILM_LIST'
    );

    if (!films) {
      films = await repo.find({
        relations: ['category']
      }); 
      await redisCache.save('api-films-FILM_LIST', films);
    }

    return films;
  }
}
