require('dotenv').config();

const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = process.env.PORT || 3333;

server.listen(PORT);
