import { Film } from '@modules/categories/typeorm/entities/Film';
import { getRepository } from 'typeorm';

export class GetAllFilmsService {
  async execute() {
    const repo = getRepository(Film);

    const films = await repo.find({
      relations: ['category']
    });

    return films;
  }
}
