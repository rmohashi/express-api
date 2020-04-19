import { Token } from 'typedi';

import { User } from './user';

export interface UserRepositoryAdapter {
  findById(id: number): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  create(name: string, email: string): Promise<User>;
}

const UserRepositoryType = new Token<UserRepositoryAdapter>();

export default UserRepositoryType;
