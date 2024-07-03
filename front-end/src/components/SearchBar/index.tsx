import React from 'react';

type SearchBarProp = {
  searchtext?: string;
  albumid?: string;
  ord?: string;
  albumDataList: number[];
};

export default function SearchBar({
  searchtext,
  albumid,
  ord,
  albumDataList,
}: SearchBarProp) {
  return (
    <form className='text-gray-600 flex flex-row gap-4'>
      <input
        name='searchtext'
        type='text'
        placeholder='search something'
        defaultValue={searchtext}
        className='rounded-xl w-32 text-ellipsis overflow-hidden focus:w-full'
      />
      <select name='albumid' defaultValue={albumid} className='rounded-xl'>
        <option value=''>Select Something</option>
        {albumDataList &&
          albumDataList.length > 0 &&
          albumDataList.map((el) => (
            <option key={el} value={el}>
              Album {el}
            </option>
          ))}
      </select>
      <select name='ord' defaultValue={ord} className='rounded-xl'>
        <option value=''>Default order</option>
        <option value='asc'>Asc</option>
        <option value='desc'>Desc</option>
      </select>
      <button
        type='submit'
        className='text-gray-100 px-4 py-2 bg-blue-600 rounded-xl'
      >
        {' '}
        Search{' '}
      </button>
    </form>
  );
}
