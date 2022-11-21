import { Request, Response } from 'express';
import { CreateUserService } from 'src/services/UserService/CreateUserService';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user)
  }
}
