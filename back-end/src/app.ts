import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import api from './routes/api';

const app = express();

app.use(cors({ origin: process.env.CORS_FRONT_END }));
app.use(morgan('short'));

app.use(express.json());

app.use('/api/v1', api);

export default app;
