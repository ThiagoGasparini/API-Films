import { getRepository } from "typeorm";
import { Film } from "@modules/categories/typeorm/entities/Film";

export class DeleteFilmService {
  async execute(id: string) {
    const repo = getRepository(Film);

    if (!(await repo.findOne(id))) {
      return new Error('Category does not exists!');
    }

    await repo.delete(id);
  }
}