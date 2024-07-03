import express from 'express';
import usersRouter from './users/users.router';
import photosRouter from './photos/photos.router';

const api = express.Router();

api.use('/users', usersRouter);
api.use('/photos', photosRouter);

export default api;
