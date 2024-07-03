import Image from 'next/image';
import { PhotoCardProp } from '@/types/Photo';
import trashBinIcon from '../../../public/trash-bin.svg';
import fallbackImg from '../../../public/default.jpg';
import ImageWithFallback from '../ImageWithFallback';

export default function PhotoCard({ photo, onDelete }: PhotoCardProp) {
  return (
    <article className='w-1/4 m-4 rounded-2xl overflow-hidden bg-gray-500 shadow-2xl'>
      <a href={photo.url}>
        <div className='p-4'>
          <h4 className='font-bold text-xl mb-2 line-clamp-2'>
            {photo.id} {photo.title}
          </h4>
        </div>
        <div className='w-full overflow-hidden'>
          <ImageWithFallback
            className='w-full scale-100 hover:scale-125'
            src={photo.thumbnailUrl ? photo.thumbnailUrl : fallbackImg}
            fallbackSrc={fallbackImg}
            alt={photo.title}
          />
        </div>
      </a>
      <div className='flex flex-row items-center justify-between px-6 pt-4 pb-2'>
        <span className='flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          Album: {photo.albumId}
        </span>
        {/* add delete item function */}
        <span className='flex items-center'>
          <button
            className='rounded-full bg-gray-200 p-2'
            onClick={() => onDelete(photo.id)}
          >
            <Image
              width={16}
              height={16}
              src={trashBinIcon}
              alt='Delete button'
            />
          </button>
        </span>
      </div>
    </article>
  );
}
