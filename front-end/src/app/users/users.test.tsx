import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Users from './page';
import { getUsers } from '@/actions/getUsers';
import { Component } from 'react';

const fetcheduserData = [
  { id: 5, name: 'Chelsey Dietrich', score: 4453 },
  { id: 2, name: 'Ervin Howell', score: 3973 },
  { id: 1, name: 'Leanne Graham', score: 3241 },
  { id: 4, name: 'Lulu Green', score: 3240 },
  { id: 3, name: 'Blue Red', score: 3239 },
];

describe('Testing /users page', () => {
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

  test('Testing UserCard with a normal user object', async () => {
    render(await Users());

    const winnerList = await screen.findAllByTestId(
      'ta-winnerlist-winnercard-name'
    );
    const userList = await screen.findAllByTestId('ta-usercard-name');

    expect(winnerList.length).toBe(3);
    expect(userList.length).toBe(2);
  });
});
