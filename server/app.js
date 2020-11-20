const express = require('express');
const {Home, db} = require('../database/index.js');
const bodyParser = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.status(200).send('success');
// });

app.get('/api/home-description', (req, res) => {
 Home.find({})
    .then((result) => {
      res.status(201).send(result[0])
    })
    .catch((err) => {
      console.log(err)
      res.status(404).send('unable to save')
    })
})

module.exports = app;