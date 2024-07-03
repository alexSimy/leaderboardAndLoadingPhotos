import { FetchedPhoto, PhotoQueryStringOptions } from '../types/photos';
import {
  filterResponseByAlbumId,
  filterResponseBySearchText,
  orderResponse,
  paginateResponse,
} from '../utils/utils';

const storage = require('node-sessionstorage');
const PHOTO_STORAGE_KEY = 'photos';

export async function populatePhotoData() {
  try {
    const response = await fetch(`${process.env.RESOURCES_API}/photos`);
    if (!response.ok) {
      throw new Error('Failed to fetch photos!');
    }
    let data: FetchedPhoto[] = await response.json();
    data = data.sort((e1, e2) => e1.id - e2.id);
    storage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(`Populate Photo Data : ${err}`);
  }
}

export function getAllPhotoData(queryStringOptions: PhotoQueryStringOptions) {
  const response = storage.getItem(PHOTO_STORAGE_KEY);
  let data: FetchedPhoto[] = JSON.parse(response);
  // filter data
  if (queryStringOptions.searchText && queryStringOptions.searchText !== '') {
    data = filterResponseBySearchText(data, queryStringOptions.searchText);
  }
  if (queryStringOptions.albumid && queryStringOptions.albumid > 0) {
    data = filterResponseByAlbumId(data, queryStringOptions.albumid);
  }

  // storing filtered data length
  const totalResults = data.length;
  const totalPages =
    queryStringOptions.limit && queryStringOptions.limit >= 0
      ? totalResults / queryStringOptions.limit
      : 1;
  const currentPages =
    queryStringOptions.page && queryStringOptions.page > 0
      ? queryStringOptions.page
      : 1;

  // paginate data
  if (queryStringOptions.skip) {
    if (queryStringOptions.skip < totalResults) {
      data = paginateResponse(
        data,
        queryStringOptions.skip,
        queryStringOptions.limit
      );
    } else if (queryStringOptions.skip >= totalResults) {
      return {
        totalResults: 0,
        totalPages: 0,
        currentPages: 0,
        data: [],
      };
    }
  }
  // order data
  if (queryStringOptions.ord && queryStringOptions.ord !== '') {
    data = orderResponse(data, queryStringOptions.ord);
  }
  return {
    totalResults,
    totalPages,
    currentPages: currentPages > totalPages ? totalPages : currentPages,
    data,
  };
}

export function findAndDeleteById(id: number): FetchedPhoto | null {
  let data: FetchedPhoto[] = JSON.parse(storage.getItem(PHOTO_STORAGE_KEY));
  const foundEl = data.find((e) => e.id === id);
  if (foundEl) {
    data = data.filter((e) => e.id !== id);
    storage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(data));
    return foundEl;
  }
  return null;
}

export function deleteAllPhotoData() {
  storage.removeItem(PHOTO_STORAGE_KEY);
}
