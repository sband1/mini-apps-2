const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');

const port = 3000;

const publicDir = path.join(__dirname, './public');
app.use(bodyParser.json());
app.use(express.static(publicDir));

app.get('/historicalPrices', (req, res) => {
  console.log('req.body', req.query);
  axios({
    method: 'get',
    url: `https://api.coindesk.com/v1/bpi/historical/close.json?start=${req.query.startDate}&end=${req.query.endDate}`,
  })
    .then((result) => {
      console.log('get historical prices success');
      res.status(202).json(result.data.bpi);
    })
    .catch((err) => {
      console.log('get historical prices error', err);
      res.sendStatus(404);
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
