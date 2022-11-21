import { Request, Response } from 'express';
import { CreateFilmService } from '../../services/FilmService/CreateFilmService';

export class CreateFilmController {
  async handle(request: Request, response: Response) {
    const { name, description, category_id, durations } = request.body;

    const service = new CreateFilmService();

    const result = await service.execute({
      name,
      description,
      category_id,
      durations,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
