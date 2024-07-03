import Image from 'next/image';
import pinataIcon from '../../public/pinata.svg';

export default function Home() {
  return (
    <div className='flex flex-row gap-24 items-center px-48 py-0 m-0'>
      <div className='text-2xl text-justify p-0 m-0'>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.`}</div>
      <Image
        className='p-0 m-0'
        width={460}
        height={460}
        alt={'pinata'}
        src={pinataIcon}
      />
    </div>
  );
}
