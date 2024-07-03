import { Request, Response } from 'express';
import { findAndDeleteById, getAllPhotoData } from '../../models/photos.model';
import { PhotoReqQueryStringOptions } from '../../types/photos';
import { getQueryStringOptions } from '../../utils/utils';

export async function getAllPhotos(
  req: Request<{}, {}, {}, PhotoReqQueryStringOptions>,
  res: Response
) {
  const queryOptions = getQueryStringOptions(req.query);

  const data = getAllPhotoData(queryOptions);
  return res.status(200).json(data);
}

export async function deletePhotoById(req: Request, res: Response) {
  const id = Number(req.params.id);
  const deletedData = findAndDeleteById(id);
  if (!deletedData) {
    return res
      .status(204)
      .json({ message: `Data with id ${id} does not exist!` });
  }

  return res.status(200).json(deletedData);
}
