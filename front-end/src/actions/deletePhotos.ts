'use server';

import { Photo } from '@/types/Photo';

export const deletePhoto = async (id: number): Promise<Photo | undefined> => {
  try {
    if (id) {
      const url = `http://localhost:5000/api/v1/photos/${id}`;
      const resp = await fetch(url, { method: 'DELETE' });
      if (!resp.ok) {
        throw new Error(`Error deleting the photo!`);
      }
      const data = (await resp.json()) as Photo;
      return data;
    }
  } catch (err) {
    console.error(`Delete Photo : ${err}`);
    throw new Error(`Delete Photos Error: ${err}`);
  }
};
