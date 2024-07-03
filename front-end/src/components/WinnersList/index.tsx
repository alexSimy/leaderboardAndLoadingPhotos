import { User } from '@/types/Users';
import React from 'react';
import WinnerCard from '../WinnerCard';

export default function WinnersList({ users }: { users: User[] }) {
  return (
    <section className='flex flex-row gap-4 mb-12 px-6 justify-center'>
      <WinnerCard user={users[1]} position='2nd' />
      <WinnerCard user={users[0]} position='1st' />
      <WinnerCard user={users[2]} position='3rd' />
    </section>
  );
}
