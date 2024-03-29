const dotenv = require('dotenv');
const mysql = require('mysql2');

dotenv.config()

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect(function(err) {
    if (err) {throw err;}
});

module.exports = connection;