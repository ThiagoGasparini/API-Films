import { getCustomRepository } from 'typeorm'
import User from '@modules/users/typeorm/entities/User';
import UsersRepository from '@modules/users/typeorm/repositories/UsersRepository';

export class GetAllUserService {
  async execute(): Promise<User[]> {
    const usersRepository = getCustomRepository(UsersRepository)

    const users = await usersRepository.find();

    return users;
  }
}