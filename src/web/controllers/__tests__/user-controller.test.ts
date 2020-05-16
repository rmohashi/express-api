import UserController from '../user-controller';

describe('Controllers: UserController', () => {
  describe('#getAll', () => {
    it('returns all users from the database', async () => {
      const users = [{
        id: 1,
        name: 'John Doe',
        email: 'john.doe@email.com',
      }];
      const mockFindAllUsersUseCase = {
        execute: () => Promise.resolve(users),
      };
      const controller = new UserController(mockFindAllUsersUseCase as any, null as any);

      const result = await controller.getAll();

      expect(result).toHaveLength(1);
      expect(result[0].name).toBe(users[0].name);
    });
  });

  describe('#create', () => {
    it('creates a single user', async () => {
      const name = 'John Doe';
      const email = 'john.doe@email.com';
      const user = {
        id: 1,
        name,
        email,
      };
      const createUser = jest.fn().mockImplementationOnce(() => Promise.resolve(user));
      const mockCreateUserUseCase = {
        execute: createUser,
      };
      const controller = new UserController(null as any, mockCreateUserUseCase as any);

      const result = await controller.create(name, email);

      expect(createUser).toHaveBeenCalledTimes(1);
      expect(createUser).toHaveBeenCalledWith(name, email);
      expect(result.name).toBe(name);
    });
  });
});
