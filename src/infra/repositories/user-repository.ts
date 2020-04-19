import { Service } from 'typedi';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import User from '@infra/entities/user';
import UserRepositoryType, { UserRepositoryAdapter } from '@domain/user-repository-adapter';

@Service(UserRepositoryType)
export default class UserRepository implements UserRepositoryAdapter {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne({ id });
  }

  create(name: string, email: string) {
    return this.repository.save({ name, email });
  }
}
