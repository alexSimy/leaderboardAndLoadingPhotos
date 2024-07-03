'use client';

import { Photo, PhotoListProps } from '@/types/Photo';
import SearchBar from '../SearchBar';
import { useCallback, useEffect, useState } from 'react';
import PhotoCard from '../PhotoCard';
import { useInView } from 'react-intersection-observer';
import { getPhotos } from '@/actions/getPhotos';
import loadingIcon from '../../../public/loading.svg';
import Image from 'next/image';
import { deletePhoto } from '@/actions/deletePhotos';
import Router from 'next/router';

const NUMBER_OF_PHOTOS_TO_BE_FETCHED = 20;

export default function PhotoList({
  initialPhotos,
  total,
  searchtext,
  albumid,
  ord,
  initNrOfPhotos,
  albumDataList,
}: PhotoListProps) {
  const [page, setPage] = useState(
    Math.floor(initNrOfPhotos / NUMBER_OF_PHOTOS_TO_BE_FETCHED) + 1
  );
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);

  const [fetchedAllData, setFetchedAllData] = useState(false);
  const [loadingRef, inView, entry] = useInView();
  const [isAllowedToFetch, setIsAllowedToFetch] = useState(true);

  const loadModePhotos = useCallback(async () => {
    setIsAllowedToFetch(false);
    const {
      data: nextBatchOfData,
      totalResults,
      totalPages,
      currentPages,
    } = await getPhotos(
      page,
      NUMBER_OF_PHOTOS_TO_BE_FETCHED,
      searchtext,
      albumid,
      ord
    );
    setPhotos((prevPhotos) => [...prevPhotos, ...nextBatchOfData]);
    setPage(currentPages + 1);
    setIsAllowedToFetch(true);
    setFetchedAllData(totalPages === currentPages);
  }, [albumid, ord, page, searchtext]);

  useEffect(() => {
    if (inView && !fetchedAllData && isAllowedToFetch) {
      loadModePhotos();
    }
  }, [fetchedAllData, inView, isAllowedToFetch, loadModePhotos]);

  const handleDelete = useCallback(async (id: number) => {
    try {
      const response = await deletePhoto(id);
      setPhotos((prevPhoto) => prevPhoto.filter((photo) => photo.id !== id));
    } catch (err) {
      //todo
    }
  }, []);

  return (
    <div className='w-full flex flex-col'>
      <section className='w-full flex justify-end mb-8'>
        <SearchBar
          searchtext={searchtext}
          albumid={albumid}
          ord={ord}
          albumDataList={albumDataList}
        />
      </section>
      <section className='flex flex-wrap grid-cols-3 justify-center'>
        {photos &&
          photos.length > 0 &&
          photos.map((photo: Photo) => {
            return (
              <PhotoCard key={photo.id} photo={photo} onDelete={handleDelete} />
            );
          })}
      </section>
      {!fetchedAllData && (
        <section ref={loadingRef} className='w-full flex justify-center mt-8'>
          <Image
            className='animate-spin h-12 w-12 text-cyan-300'
            width={32}
            height={32}
            src={loadingIcon}
            alt='loading icon'
          />
        </section>
      )}
    </div>
  );
}
