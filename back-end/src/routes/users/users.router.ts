import express from 'express';
import { httpGetTopTenUsers } from './users.controller';

const usersRouter = express.Router();

usersRouter.get('/', httpGetTopTenUsers);

export default usersRouter;
