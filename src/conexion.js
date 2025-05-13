const mysql2 = require('mysql2');

// MySQL Connection
require('dotenv').config();

const connection = mysql2.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DB_NAME || 'red_social',
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});



module.exports = connection;