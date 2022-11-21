import { Category } from "@modules/categories/typeorm/entities/Category";
import { Film } from "@modules/categories/typeorm/entities/Film";
import AppError from "@shared/errors/AppError";
import { getRepository } from "typeorm";

type FilmRequest = {
  name: string;
  description: string;
  category_id: string;
  durations: number;
}

export class CreateFilmService {
  async execute({name, description, category_id, durations }: FilmRequest): Promise<Error | Film> {
    const repo = getRepository(Film);
    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      throw new AppError('Category does not exists');
    }

    const film = repo.create({ name, description, category_id, durations });

    await repo.save(film);

    return film
  }
}