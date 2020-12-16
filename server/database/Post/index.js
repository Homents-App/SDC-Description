require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'school',
  host: '172.31.21.61',
  database: 'homeschema',
  port: '5432',
});

// eslint-disable-next-line no-unused-vars
pool.on('error', (err, client) => {
  console.error('Error: ', err);
});

module.exports = {
  pool,
};
// sudo psql -h 172.31.21.61 -U postgres
// root
// host    all             all             172.31.21.61/0          md5
// DATABASE_URL=postgres://postgres:school@172.31.21.61:5432/HomeSchema
// /home/ubuntu/SDC-Description/server/database/Post/post.sql
// curl -H 'loaderio-auth: loaderio-7b3880659956232944fb2543bad8c57a' https://api.loader.io/v2/tests
