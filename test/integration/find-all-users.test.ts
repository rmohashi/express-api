import supertest, { SuperTest, Test } from 'supertest';
import { Connection } from 'typeorm';

import App from '../../src/app';
import generateUser from '../factories/user-factory';

describe('Integration: GET /user', () => {
  let request: SuperTest<Test>;
  let dbConnection: Connection;

  beforeAll(async () => {
    const app = new App();
    await app.configure();
    request = supertest(app.app);
    dbConnection = app.dbConnection;
  });

  afterEach(async () => {
    await dbConnection.synchronize(true);
  });

  afterAll(() => {
    dbConnection.close();
  });

  it('returns all users', async () => {
    const name = 'John Doe';
    const user = await generateUser({ name });

    const response = await request.get('/user');

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toMatchObject(user);
  });
});
