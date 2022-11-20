import { Request, Response } from 'express';
import {GetByIdFilmService} from 'src/services/FilmService/GetByIdFilmService'

export class GetByIdFilmController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetByIdFilmService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}