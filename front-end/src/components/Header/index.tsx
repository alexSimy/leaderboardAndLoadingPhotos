import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className='z-10 w-full bg-gray-700 h-16 flex flex-row items-center p-8 sticky top-0 shadow-md bg-opacity-50 justify-between'>
      <span>
        <Link href='/' className='flex flex-row items-center text-3xl'>
          <h3 className='text-yellow-500'>Client</h3>
          <h3>App</h3>
        </Link>
      </span>
      <span className='flex flex-row items-center text-1xl gap-4'>
        <Link href='/photos'>Check our photos</Link>
        <Link href='/users'>Check our leaderboard</Link>
      </span>
    </header>
  );
}
