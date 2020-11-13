const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description_module', {
  useMongoClient:true
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
    'mortgage_est': 'Number'
  },
  'description_text': {
    'text': String,
  },
  "home_details": {
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
  'price_history': {
    'date': Date,
    'price': Number,
    'event': String
  }

})

var home = mongoose.model('descriptionSchema', descriptionSchema);

var save = () => {

}


module.exports.save = save;

