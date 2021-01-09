const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const publicDir = path.join(__dirname, './public');
app.use(express.static(publicDir));

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
