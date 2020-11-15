const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description_module', {
  useNewUrlParser:true, useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=> {console.log('MongoDB is running')})

const HomeSchema = new mongoose.Schema({
  home_info: {
    address: String,
    beds: Number,
    baths: Number,
    sqft: Number,
    price: Number,
    mortgage_est: Number
  },

  map_view: {image: String, text: String},
  street_view: {image: String, text: String},
  schools: {image: String, text: String},
  commute: {image: String, text: String},

  description_text: {
    text: String
  },

  home_details: {
    heating: String,
    property_type: String,
    cooling_system: String,
    days_on_market: Number,
    number_of_rooms: Number,
    exterior: String,
    price_per_sqft: Number,
    year_built: Number,
    parking_spaces: Number,
    floors: String,
    roof: String,
    mls_source_id: Number
  },

  price_history: [
    {date: Date, price: Number, event: String}
    //generate this entire object random number of times
  ]

});

let Home = mongoose.model('Home', HomeSchema);

module.exports = {
  Home
}
