const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;

const publicDir = path.join(__dirname, './public');
app.use(bodyParser.json());
app.use(express.static(publicDir));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
