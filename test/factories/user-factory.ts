import faker from 'faker';
import Container from 'typedi';

import UserRepository from '../../src/infra/repositories/user-repository';

type UserData = {
  name: string;
  email: string;
}

const generateUser = (userData: Partial<UserData>) => {
  const data: UserData = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    ...userData,
  };
  const repository = Container.get(UserRepository);
  return repository.create(data.name, data.email);
};

export default generateUser;
