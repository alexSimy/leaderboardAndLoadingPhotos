import { render, screen } from '@testing-library/react';
import { getUsers } from './getUsers';

const fetcheduserData = [
  { id: 5, name: 'Chelsey Dietrich', score: 4453 },
  { id: 2, name: 'Ervin Howell', score: 3973 },
  { id: 1, name: 'Leanne Graham', score: 3241 },
  { id: 4, name: 'Lulu Green', score: 3240 },
  { id: 3, name: 'Blue Red', score: 3239 },
];

describe('Testing getUsers call', () => {
  const unmockedFetch = global.fetch;

  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(fetcheduserData),
        ok: true,
      })
    ) as jest.Mock;
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  test('Testing getUsers', async () => {
    const response = await getUsers();
    expect(response).toStrictEqual(fetcheduserData);
  });
});
