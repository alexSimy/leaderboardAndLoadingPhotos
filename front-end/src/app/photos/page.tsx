import { getPhotos } from '@/actions/getPhotos';
import PhotoList from '@/components/PhotoList';
import { PhotosProps } from '@/types/Photo';

const INITIAL_NUMBER_OF_PHOTOS = 40;

const Photos = async ({ searchParams }: PhotosProps) => {
  console.log(searchParams);
  const { searchtext, albumid, ord } = searchParams;
  const { data, totalResults, totalPages, currentPages, albumDataList } =
    await getPhotos(
      1,
      INITIAL_NUMBER_OF_PHOTOS,
      searchtext ? encodeURIComponent(searchtext) : undefined,
      albumid,
      ord
    );

  return (
    <>
      <PhotoList
        initialPhotos={data}
        total={totalResults}
        searchtext={searchtext}
        albumid={albumid}
        ord={ord}
        initNrOfPhotos={INITIAL_NUMBER_OF_PHOTOS}
        albumDataList={albumDataList}
      />
    </>
  );
};

export default Photos;
