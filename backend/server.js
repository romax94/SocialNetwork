const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', (req, res) => {
  if (req.body.email && req.body.password) {
    res.sendStatus(200);
  }
});

app.listen(3001, () => {
  console.log('server started');
});