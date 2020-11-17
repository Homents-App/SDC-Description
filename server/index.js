const express = require('express');
const {Home, db} = require('../database/index.js');
let app = express();

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('success');
});

app.get('/api/home-description', (req, res) => {
 Home.find({})
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});