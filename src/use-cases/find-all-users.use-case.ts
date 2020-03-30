import { Service, Inject } from 'typedi';
import UserRepositoryAdapter, { UserRepositoryType } from '@domain/user-repository-adapter';

@Service()
export default class FindAllUsersUseCase {
  constructor(
    @Inject(UserRepositoryType)
    private userRepositoryAdapter: UserRepositoryAdapter,
  ) {}

  execute() {
    return this.userRepositoryAdapter.findAll();
  }
}
