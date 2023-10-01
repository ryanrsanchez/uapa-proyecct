//import mysql from 'mysql2';
const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');

// Configura la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'humildad12',
  database: 'gestionPasantia',
});

// Conéctate a la base de datos MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos MySQL:', err);
    throw err;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = db;