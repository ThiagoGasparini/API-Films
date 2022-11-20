import { Film } from '@modules/categories/typeorm/entities/Film';
import { getRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';

type FilmUpdateRequest = {
  id: string;
  name: string;
  description: string;
  category_id: string;
  durations: number;
};

export class UpdateFilmService {
  async execute({
    id,
    name,
    description,
    category_id,
    durations,
  }: FilmUpdateRequest) {
    const repo = getRepository(Film);

    const film = await repo.findOne(id);

    if (!film) {
      throw new AppError('Category does not exists');
    }

    film.name = name ? name : film.name;
    film.description = description ? description : film.description;
    film.category_id = category_id ? category_id : film.category_id;
    film.durations = durations ? durations : film.durations;

    await repo.save(film);

    return film;
  }
}
