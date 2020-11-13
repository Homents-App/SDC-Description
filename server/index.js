const express = require('express');
let app = express();

const bodyParser = require('body-parser');

app.use(express.static(_dirname + '/../client/public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get(){};


let port;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});