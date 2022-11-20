import { Film } from "@modules/categories/typeorm/entities/Film";
import AppError from "@shared/errors/AppError";
import { getRepository } from "typeorm";

export class GetByIdFilmService {
  async execute(id: string) {
    const repo = getRepository(Film);

    const film = await repo.findOne(id, {
      relations: ['category']
    });

    if (!film) {
      throw new AppError('Film does not exists')
    }

    return film
  }
}