import { getUsers } from '@/actions/getUsers';
import { User } from '@/types/Users';
import React from 'react';

export default async function Users() {
  const users: User[] = await getUsers();
  const winners = users.slice(0, 3);
  const restOfUsers = users.slice(3);

  return (
    <section className='w-full flex flex-wrap flex-col items-center'>
      <div className='w-1/2 flex flex-wrap flex-col'>
        <div>{JSON.stringify(winners)}</div>
        <div>{JSON.stringify(restOfUsers)}</div>
      </div>
    </section>
  );
}
