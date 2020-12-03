const { Home } = require('./index.js');

const saveHomeInfo = (input) => Home.insertMany(input)
  .then((data) => {
    console.log(data, 'data inserted');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  saveHomeInfo,
};
