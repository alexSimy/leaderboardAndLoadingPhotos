'use server';

import { APIFetchPhoto } from '@/types/Photo';

export const getPhotos = async (
  page: number,
  limit: number,
  searchtext?: string,
  albumid?: string,
  ord?: string
) => {
  let queryParams = '';
  if (searchtext) {
    console.log('getPhotos', searchtext);
    queryParams += `&searchtext=${searchtext}`;
  }
  if (albumid) {
    queryParams += `&albumid=${albumid}`;
  }
  if (ord) {
    queryParams += `&ord=${ord}`;
  }
  try {
    const url = `http://localhost:5000/api/v1/photos?page=${page}&limit=${limit}${
      queryParams && queryParams
    }`;
    const resp = await fetch(url, { cache: 'no-store' });
    if (!resp.ok) {
      throw new Error(`Error fetching the photos!`);
    }
    const data = (await resp.json()) as APIFetchPhoto;
    return data;
  } catch (err) {
    console.error(`Getting Photos : ${err}`);
    throw new Error(`Getting Photos Error: ${err}`);
  }
};
