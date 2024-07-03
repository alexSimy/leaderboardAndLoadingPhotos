import {
  PhotoQueryStringOptions,
  PhotoReqQueryStringOptions,
} from '../types/photos';

export function filterResponseBySearchText<T extends { title: string }>(
  originalData: T[],
  searchtext: string
): T[] {
  let filteredData = originalData;
  if (searchtext && searchtext !== '') {
    filteredData = originalData.filter((el) => {
      return el.title.includes(searchtext);
    });
  }
  return filteredData;
}

export function filterResponseByAlbumId<T extends { albumId: number }>(
  originalData: T[],
  albumId: number
): T[] {
  let filteredData = originalData;
  if (albumId && albumId > 0) {
    filteredData = originalData.filter((el) => {
      return el.albumId === albumId;
    });
  }
  return filteredData;
}

const ORD_ACTIONS = {
  ASC: 'asc',
  DESC: 'desc',
};

export function orderResponse<T extends { id: number }>(
  originalData: T[],
  ord: string
): T[] {
  let orderedData = originalData;
  if (ord) {
    switch (ord) {
      case ORD_ACTIONS.DESC:
        orderedData = originalData.sort((e1, e2) => e2.id - e1.id);
        return orderedData;

      default:
      case ORD_ACTIONS.ASC:
        return orderedData;
    }
  }
  return originalData;
}

export function getAlbumFilter<T extends { albumId: number }>(
  originalData: T[]
): number[] {
  const albumIsData: number[] = [];
  originalData.forEach((e) => {
    if (!albumIsData.includes(e.albumId)) {
      albumIsData.push(e.albumId);
    }
  });
  return albumIsData;
}

export function paginateResponse<T>(
  originalData: T[],
  skip?: number,
  limit?: number
): T[] {
  console.log(originalData.length, skip, limit);

  let paginatedData = originalData;
  const startPosition = skip && skip >= 0 ? skip : 0;
  if (startPosition < originalData.length) {
    if (limit && limit > 0) {
      const endPosition = startPosition + limit;
      paginatedData = originalData.slice(startPosition, endPosition);
    } else {
      paginatedData = originalData.slice(startPosition);
    }
  }
  return paginatedData;
}

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_LIMIT = 0;
export function getPagination(query: { page: number; limit: number }) {
  const page = Math.abs(query.page) || DEFAULT_PAGE_NUMBER;
  const limit = Math.abs(query.limit) || DEFAULT_PAGE_LIMIT;
  const skip = (page - 1) * limit;
  return {
    skip: skip,
    limit: limit,
  };
}

export function getQueryStringOptions(
  query: PhotoReqQueryStringOptions
): PhotoQueryStringOptions {
  const { page, limit, searchtext, ord, albumid } = query;
  const paginationOptions = getPagination({
    page: parseInt(page as string),
    limit: parseInt(limit as string),
  });
  const srcTxt = searchtext
    ? decodeURIComponent(searchtext as string)
    : undefined;
  const order = ord ? (ord as string) : undefined;
  const pg = page ? parseInt(page as string) : undefined;
  const albumId = albumid ? parseInt(albumid as string) : undefined;
  return {
    page: pg,
    skip: paginationOptions.skip,
    limit: paginationOptions.limit,
    searchText: srcTxt,
    albumid: albumId,
    ord: order,
  };
}
