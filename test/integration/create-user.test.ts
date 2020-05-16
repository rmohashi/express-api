import supertest, { SuperTest, Test } from 'supertest';
import { Connection } from 'typeorm';

import App from '../../src/app';

describe('Integration: POST /user', () => {
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

  it('creates a new user', async () => {
    const name = 'John Doe';
    const email = 'john.doe@email.com';

    const response = await request.post('/user').send({ name, email });

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      id: expect.any(Number),
      name,
      email,
    });
  });
});
