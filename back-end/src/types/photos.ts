export type FetchedPhoto = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotoQueryStringOptions = {
  page?: number;
  skip?: number;
  limit?: number;
  searchText?: string;
  ord?: string;
  albumid?: number;
};

export type PhotoReqQueryStringOptions = {
  page: string;
  limit: string;
  searchtext: string;
  ord: string;
  albumid: string;
};
