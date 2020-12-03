const express = require('express');
const bodyParser = require('body-parser');
const { Home } = require('./database/index.js');

const app = express();

app.use(express.static(`${__dirname}/../client/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('success');
});

const formatData = (data) => {
  const { homeInfo, priceHistory, homeDetails, descriptionText } = data;
  const localInfo = {
    mapView: data.mapView,
    streetView: data.streetView,
    schools: data.schools,
    commute: data.commute,
    listingAgent: data.listingAgent,
  };
  return { homeInfo, priceHistory, homeDetails, descriptionText, localInfo };
};

app.get('/api/home-description', (req, res) => {
  Home.find({})
    .then((result) => {
      res.status(201).send(formatData(result[0]));
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to save');
    });
});

app.post('/api/home-description', (req, res) => {
  Home.insertOne(req)
    .then((result) => {
      res.status(201).send(formatData(result[0]));
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to save');
    });
});

app.delete('/api/home-description', (req, res) => {
  Home.remove({ exterior: 'Metal' })
    .then(() => {
      res.status(201).send('Data deleted');
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to delete');
    });
});

app.put('/api/home-description', (req, res) => {
  Home.updateMany({ exterior: 'Metal' }, { $set: { exterior: 'Plastic' } })
    .then(() => {
      res.status(201).send('Data Updated');
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('unable to Update');
    });
});

module.exports = app;
