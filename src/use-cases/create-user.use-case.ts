import { Service, Inject } from 'typedi';

import UserRepositoryType, { UserRepositoryAdapter } from '@domain/user-repository-adapter';

@Service()
export default class CreateUserUseCase {
  constructor(
    @Inject(UserRepositoryType)
    private userRepositoryAdapter: UserRepositoryAdapter,
  ) {}

  execute(name: string, email: string) {
    return this.userRepositoryAdapter.create(name, email);
  }
}
