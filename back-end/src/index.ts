require('dotenv').config();

import http from 'node:http';

const PORT = process.env.PORT || 5000;

const server = http.createServer();

const startServer = async () => {
  server.listen(PORT, () => {
    console.log(`Server started on ${PORT}.`);
  });
};

startServer();
