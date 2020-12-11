require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: 'http://52.14.51.216/',
  database: 'HomeSchema',
});

// eslint-disable-next-line no-unused-vars
pool.on('error', (err, client) => {
  console.error('Error: ', err);
});

module.exports = {
  pool,
};
