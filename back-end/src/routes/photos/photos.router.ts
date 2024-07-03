import express from 'express';
import { deletePhotoById, getAllPhotos } from './photos.controller';

const photosRouter = express.Router();

photosRouter.get('/', getAllPhotos);
photosRouter.delete('/:id', deletePhotoById);

export default photosRouter;
