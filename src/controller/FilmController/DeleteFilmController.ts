import { Request, Response } from 'express';
import { DeleteFilmService } from '../../services/FilmService/DeleteFilmService';

export class DeleteFilmController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteFilmService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(204).end();
  }
}
