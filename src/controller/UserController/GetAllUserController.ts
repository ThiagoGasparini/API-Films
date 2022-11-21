import { Request, Response } from 'express';
import { GetAllUserService } from '../../services/UserService/GetAllUserService';

export class GetAllUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const UsersList = new GetAllUserService;

    const users = await UsersList.execute();

    return response.json(users)
  }
}
