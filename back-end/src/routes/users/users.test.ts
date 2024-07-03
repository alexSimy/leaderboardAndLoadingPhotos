import request from 'supertest';

import app from '../../app';

describe('Test users api', () => {
  const OLD_ENV = process.env;

  beforeAll(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    process.env.RESOURCES_API = 'https://jsonplaceholder.typicode.com';
  });

  afterAll(() => {
    process.env = OLD_ENV;
    jest.clearAllMocks();
  });

  test('testing GET response from /users', async () => {
    const response = await request(app).get('/api/v1/users').expect(200);
    expect(response.body.length).toStrictEqual(10);
    expect(Object.keys(response.body[0])).toStrictEqual([
      'id',
      'name',
      'score',
    ]);
  });

  test('testing GET response content-type from /users', async () => {
    const response = await request(app)
      .get('/api/v1/users')
      .expect('Content-Type', /json/);
  });

  test('testing GET response content-type from /users', async () => {
    const response = await request(app)
      .get('/api/v1/users')
      .expect('Content-Type', /json/);
  });
});
