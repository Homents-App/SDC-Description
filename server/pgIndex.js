const pg = require('pg');
// const express = require('express');

const pool = new pg.Pool({
  user: 'root',
  password: '',
  database: 'HomeSchema',
  max: 200,
}, (err) => {
  if (err) {
    console.log(err, 'err occured on connection');
  } else {
    console.log('successful connection');
  }
});

pool.connect((err) => {
  if (err) {
    return console.error('Error acquiring client ', err.stack);
  }
  return console.log('Connected to Client');
});
