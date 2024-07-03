require('dotenv').config();

import http from 'node:http';
import app from './app';

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

const startServer = async () => {
  server.listen(PORT, () => {
    console.log(`Server started on ${PORT}.`);
  });
};

startServer();
