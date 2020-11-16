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
 db.collection('Home').find((err, results) => {
  if (err) {
    console.log(err)
    res.sendStatus(404)
  } else {
    console.log(results)
    res.send(JSON.stringify(results))
  }
 })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});