import React from 'react';
import userIcon from '../../../public/userIcon.webp';
import Image from 'next/image';
import { User } from '@/types/Users';

export default function UserCard({ user }: { user: User }) {
  return (
    <div className='flex flex-row items-center w-full mb-8 shadow-md'>
      <span className='z-1 absolute flex items-center px-3 py-2 rounded-full bg-gray-100'>
        <Image
          data-testid='ta-usercard-image'
          width={48}
          height={48}
          src={userIcon}
          alt={user.name}
        />
      </span>
      <span className='flex flex-row ml-16 items-center w-full bg-blue-500 bg-opacity-25 rounded-lg p-4 justify-between'>
        <span data-testid='ta-usercard-name'>{user.name}</span>
        <span data-testid='ta-usercard-score'>{user.score}</span>
      </span>
    </div>
  );
}
