const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "fms"
});

module.exports = db;