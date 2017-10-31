import bluebird from 'bluebird';
import WebSocket from 'ws';
import qixSchema from 'enigma.js/schemas/3.2.json';

const config = {
  Promise: bluebird,
  schema: qixSchema,
  session: {
    port: '4848',
    secure: false,
    disableCache: true,
  },
  createSocket(url) {
    return new WebSocket(url);
  },
};

module.exports = config;
