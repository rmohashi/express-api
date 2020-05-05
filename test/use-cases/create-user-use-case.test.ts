import CreateUserUseCase from '../../src/use-cases/create-user.use-case';

describe('Use Case: CreateUserUseCase', () => {
  it('creates a user using the repository', async () => {
    const name = 'John Doe';
    const email = 'john.doe@email.com';
    const user = {
      id: 1,
      name,
      email,
    };
    const create = jest.fn().mockImplementationOnce(() => Promise.resolve(user));
    const repository = {
      create,
    };
    const useCase = new CreateUserUseCase(repository as any);

    const result = await useCase.execute(name, email);

    expect(create).toHaveBeenCalledTimes(1);
    expect(create).toHaveBeenCalledWith(name, email);
    expect(result.name).toBe(user.name);
  });
});
