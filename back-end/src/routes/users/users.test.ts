import request from 'supertest';

import app from '../../app';
import { getTopTenUsers } from '../../models/users.model';
import { LeaderboardUser } from '../../types/users';

const resData: LeaderboardUser[] = [
  { id: 6, name: 'Mrs. Dennis Schulist', score: 4498 },
  { id: 4, name: 'Patricia Lebsack', score: 4260 },
  { id: 9, name: 'Glenna Reichert', score: 3976 },
  { id: 2, name: 'Ervin Howell', score: 3863 },
  { id: 5, name: 'Chelsey Dietrich', score: 3006 },
];

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
