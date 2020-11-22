const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/truliaInfoDb', {
  useNewUrlParser: true, useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => { console.log('MongoDB is running'); });

const HomeSchema = new mongoose.Schema({
  homeInfo: {
    address: String,
    fullAddress: String,
    beds: Number,
    baths: Number,
    sqft: Number,
    price: Number,
    mortgageEst: Number,
    boxIcon: String,
  },

  mapView: { image: String, text: String },
  streetView: { image: String, text: String },
  schools: { image: String, text: String },
  commute: { image: String, text: String },
  listingAgent: String,

  descriptionText: String,

  homeDetails: {
    heating: String,
    propertyType: String,
    coolingSystem: String,
    daysOnMarket: Number,
    numberOfRooms: Number,
    exterior: String,
    pricePerSqft: Number,
    yearBuilt: Number,
    parkingSpaces: Number,
    floors: String,
    roof: String,
    mlsSourceId: Number,
  },

  priceHistory: [
    { date: Date, price: Number, event: String },
    // generate this entire object random number of times
  ],

});

const Home = mongoose.model('Home', HomeSchema);

module.exports = {
  Home,
  db,
};
