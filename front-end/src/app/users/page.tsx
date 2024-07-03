import { getUsers } from '@/actions/getUsers';
import UserCard from '@/components/UserCard';
import WinnersList from '@/components/WinnersList';
import { User } from '@/types/Users';
import React from 'react';

export default async function Users() {
  const users: User[] = await getUsers();

  const winners = users.slice(0, 3);
  const restOfUsers = users.slice(3);

  console.log('TEST Users winners:', winners);
  console.log('TEST Users restOfUsers:', restOfUsers);
  return (
    <section className='w-full flex flex-wrap flex-col items-center'>
      <h1 className='text-5xl mb-16 uppercase'>Leaderboard</h1>
      <div className='w-1/2 flex flex-wrap flex-col'>
        <WinnersList users={winners} />
      </div>
      <div className='w-1/2 flex flex-wrap flex-col'>
        {restOfUsers &&
          restOfUsers.length &&
          restOfUsers.map((user: User) => {
            return <UserCard key={user.id} user={user} />;
          })}
      </div>
    </section>
  );
}
