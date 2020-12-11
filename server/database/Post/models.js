const { pool } = require('./index.js');

const getHome = async (id) => {
  const str = 'SELECT * FROM homeInfo WHERE id=$1;';
  let response;
  try {
    response = await pool.query(str, [id]);
  } catch (error) {
    console.error(error);
    throw (error);
  }
  return response;
};

const getAgent = async (id) => {
  const str = 'SELECT * FROM listingAgent WHERE id=$1;';
  let response;
  try {
    response = await pool.query(str, [id]);
  } catch (error) {
    console.error(error);
    throw (error);
  }
  return response;
};
const getDescrip = async (id) => {
  const str = 'SELECT * FROM descriptionText WHERE id=$1;';
  let response;
  try {
    response = await pool.query(str, [id]);
  } catch (error) {
    console.error(error);
    throw (error);
  }
  return response;
};
const getDetail = async (id) => {
  const str = 'SELECT * FROM homeDetails WHERE id=$1;';
  let response;
  try {
    response = await pool.query(str, [id]);
  } catch (error) {
    console.error(error);
    throw (error);
  }
  return response;
};
const getPrice = async (id) => {
  const str = 'SELECT * FROM priceHistory WHERE id=$1;';
  let response;
  try {
    response = await pool.query(str, [id]);
  } catch (error) {
    console.error(error);
    throw (error);
  }
  return response;
};

// POST
const newHome = async (params) => {
  const str = 'INSERt INTO homeInfo (address, fullAddress, beds, baths, sqft, price, mortgageEst, boxIcon) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
  let response;
  try {
    response = await pool.query(str, [params]);
  } catch (error) {
    console.error(error);
    throw (error);
  }
  return response;
};

// DELETE
const removeHome = async (id) => {
  const str = 'DELETE FROM homeInfo where id=$1';
  let response;
  try {
    response = await pool.query(str, [id]);
  } catch (error) {
    console.error(error);
    throw (error);
  }
  return response;
};

module.exports = {
  getHome,
  // getMap,
  getDescrip,
  getPrice,
  getDetail,
  getAgent,
  // getComm,
  // getSchool,
  // getStreet,
  newHome,
  removeHome,
};
