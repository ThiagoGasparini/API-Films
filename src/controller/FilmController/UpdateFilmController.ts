import { Request, Response } from 'express';
import { UpdateFilmService } from 'src/services/FilmService/UpdateFilmService';

export class UpdateFilmController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description, category_id, durations } = request.body;

    const service = new UpdateFilmService();

    const result = await service.execute({
      id,
      name,
      description,
      category_id,
      durations,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
