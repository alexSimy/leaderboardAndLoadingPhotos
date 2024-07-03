'use server';

import { User } from '@/types/Users';

export const getUsers = async () => {
  try {
    const url = 'http://localhost:5000/api/v1/users';
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error('Error fetching users!');
    }
    const data = (await resp.json()) as User[];
    return data;
  } catch (err) {
    console.log(`Get Users: ${err}`);
    throw new Error(`Get Users: ${err}`);
  }
};
