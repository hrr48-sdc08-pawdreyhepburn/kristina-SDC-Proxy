require('newrelic');
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;
const HOST = 'localhost';

app.use(express.static(__dirname));
app.use(cors());

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the 4 services present in the Team 2 FEC project.');
});

app.get('/:productid', (req, res) => {
  console.log('get', req.params.productid)
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
