const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    port: 3306,
    database: "fms"
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL', err);
        throw err;
    }
    console.log('MySQL connected successfully.');
});

module.exports = db;