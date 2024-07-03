import express from 'express';
import { httpGetTopTenUsers } from './users.controller';

const usersRouter = express.Router();

usersRouter.use('/', httpGetTopTenUsers);

export default usersRouter;
