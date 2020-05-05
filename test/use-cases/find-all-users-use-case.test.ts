import FindAllUsersUseCase from '../../src/use-cases/find-all-users.use-case';

describe('Use Case: FindAllUsersUseCase', () => {
  it('returns all users from repository', async () => {
    const users = [{
      id: 1,
      name: 'John Doe',
      email: 'john.doe@email.com',
    }];
    const findAll = jest.fn().mockImplementationOnce(() => Promise.resolve(users));
    const repository = {
      findAll,
    };
    const useCase = new FindAllUsersUseCase(repository as any);

    const result = await useCase.execute();

    expect(findAll).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe(users[0].name);
  });
});
