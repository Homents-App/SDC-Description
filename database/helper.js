const {Home} = require('./index.js');

var saveHomeInfo = (input) => {
  return Home.insertMany(input)
  .then((data)=> {
    console.log(data, 'data inserted')
  })
  .catch((err) => {
    console.log(err)
  })
}

module.exports = {
  saveHomeInfo
}


