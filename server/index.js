const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/photoGallery', (req, res) => {
  db.findAllPhotos((err, data) => {
    if (err) {
      res.status(500);
      res.send();
    } else {
      res.status(200);
      res.send(data);
    }
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
