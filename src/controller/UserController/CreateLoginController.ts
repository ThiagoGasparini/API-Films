import { Request, Response } from 'express';
import { CreateLoginService } from 'src/services/UserService/CreateLoginService';

export class CreateLoginController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createLogin = new CreateLoginService();

    const user = await createLogin.execute({
      email,
      password,
    });

    return response.json(user)
  }
}
