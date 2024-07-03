export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type APIFetchPhoto = {
  data: Photo[];
  totalResults: number;
  totalPages: number;
  currentPages: number;
  albumDataList: number[];
};

export type PhotosProps = {
  searchParams: PhotoSearchParams;
};

export type PhotoSearchParams = {
  searchtext?: string;
  albumid?: string;
  ord?: string;
};

export type PhotoListProps = {
  initialPhotos: Photo[];
  total: number;
  initNrOfPhotos: number;
  albumDataList: number[];
} & PhotoSearchParams;

export type PhotoCardProp = {
  photo: Photo;
  onDelete: (id: number) => void;
};
