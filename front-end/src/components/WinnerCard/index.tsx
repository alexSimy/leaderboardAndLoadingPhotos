import { User } from '@/types/Users';
import React from 'react';
import Image from 'next/image';
import userIcon from '../../../public/userIcon.webp';
import crownIcon from '../../../public/crown.svg';

export default function WinnerCard({
  user,
  position,
}: {
  user: User;
  position: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-end ${
        position === '1st' && 'mb-8'
      }`}
    >
      <div className='w-24 h-24 px-2 py-2 rounded-full bg-gray-100 flex flex-row justify-center relative'>
        {position === '1st' && (
          <Image
            width={64}
            height={64}
            src={crownIcon}
            alt='first position'
            className='golden-crown absolute -left-7 -top-5 -rotate-45'
          />
        )}
        <span className='absolute z-1 right-0 top-0 text-orange-300 text-2xl font-bold'>
          {position}
        </span>
        <Image width={64} height={64} src={userIcon} alt={user.name} />
      </div>
      <div
        className='uppercase mt-4 mb-1'
        data-testid='ta-winnerlist-winnercard-name'
      >
        {user.name}
      </div>
      <div>{user.score}</div>
    </div>
  );
}
