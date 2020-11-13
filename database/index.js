const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description_module', {
  useMongoClient:true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', ()=> {console.log('MongoDB is running')})

let descriptionSchema = new mongoose.Schema({

  'home_info': {
    'address': String,
    'beds': Number,
    'baths': Number,
    'sqft': Number,
    'price': Number,
    'mortgage_est': Number
  },

  'local_info': {
    'map_view': {'image': String, 'text': String},
    'street_view': {'image': String, 'text': String},
    'crime': {'image': String, 'text': String},
    'commute': {'image': String, 'text': String}
  },

  'description_text': {
    'text': String,
  },

  'home_details': {
    'heating': String,
    'property_type': String,
    'cooling_system': String,
    'days_on_market': Number,
    'number_of_rooms': Number,
    'architecture': String,
    'exterior': String,
    'price_per_sqft': Number,
    'year_built': Number,
    'types_of_rooms': String,
    'floors': String,
    'lot_size': Number,
    'mls/source_id': Number
  },
  'price_history': [
    {'date': Date, 'price': Number, 'event': String}
  ]
})

var Home = mongoose.model('Home', descriptionSchema);

var save = (homeData) => {
  return Home.insertOne(homeData);
}


module.exports.save = save;

