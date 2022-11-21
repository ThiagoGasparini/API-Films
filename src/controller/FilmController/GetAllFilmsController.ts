import { Request, Response } from 'express';
import { GetAllFilmsService } from '../../services/FilmService/GetAllFilmsService';

export class GetAllFilmsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllFilmsService();

    const films = await service.execute();

    return response.json(films);
  }
}
