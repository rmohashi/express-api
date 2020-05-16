import {
  JsonController, Get, Post, BodyParam,
} from 'routing-controllers';

import FindAllUsersUseCase from '@use-cases/find-all-users-use-case';
import CreateUserUseCase from '@use-cases/create-user-use-case';

@JsonController('/user')
export default class UserController {
  constructor(
    private findAllUsersUseCase: FindAllUsersUseCase,
    private createUserUseCase: CreateUserUseCase,
  ) {}

  @Get()
  getAll() {
    return this.findAllUsersUseCase.execute();
  }

  @Post()
  create(
    @BodyParam('name')
      name: string,
    @BodyParam('email')
      email: string,
  ) {
    return this.createUserUseCase.execute(name, email);
  }
}
