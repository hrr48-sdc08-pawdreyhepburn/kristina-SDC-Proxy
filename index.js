require('newrelic');
const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');

const PORT = 3000;
const HOST = 'localhost';

app.use(express.static(__dirname));
app.use(cors());

app.get('/info', (req, res, next) => {
  res.send('This is a proxy service which proxies to the 4 services present in the Team 2 FEC project.');
});

app.get('/:productid', (req, res) => {
  console.log('proxy get', req.params.productid)
  res.sendFile(__dirname + '/index.html');
})

app.get('/api/reviews/:productid', (req, res) => {
  axios.get(`http://localhost:3004/api/reviews/${req.params.productid}`)
  .then((results)=>{
    res.send(results.data)
  })
  .catch((err) => {
    console.log(err)
  })
})

app.listen(PORT, HOST, () => {
  console.log(`Starting Proxy at ${HOST}:${PORT}`);
});
