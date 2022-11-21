import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import User from '@modules/users/typeorm/entities/User';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import authConfig from '@config/auth';

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: User;
  token: string;
};

export class CreateLoginService {
  async execute({ email, password }: LoginRequest): Promise<LoginResponse> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect Email or Password!', 401);
    }

    const passwordConfirmed = await compare(password, user.password);

    if (!passwordConfirmed) {
      throw new AppError('Incorrect Email or Password!', 401);
    }

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    })

    return {
      user,
      token,
    };
  }
}
