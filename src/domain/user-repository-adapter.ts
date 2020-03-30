import { Token } from 'typedi';

import { User } from './user';

export default interface UserRepositoryAdapter {
  findById(id: number): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  create(name: string, email: string): Promise<User>;
}

export const UserRepositoryType = new Token<UserRepositoryAdapter>();
