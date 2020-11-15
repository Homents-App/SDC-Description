const express = require('express');
const db = require('../database/index.js');
let app = express();

const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
  res.status(200).send('success');
});

app.get('/api/home-description', (req, res) => {
  console.log(req.body)
  //multiple db calls , quieries
  //1, quiery, .then (repeat)

})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});