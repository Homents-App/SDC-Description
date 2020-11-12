const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/description_module', {
  useMongoClient:true
});



let descriptionSchema = mongoose.Schema({

})

var home = mongoose.model('descriptionSchema', descriptionSchema);

var save = () => {

}


module.exports.save = save;

