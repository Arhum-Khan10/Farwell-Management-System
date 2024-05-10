// global imports
const express = require("express"),
    db = require("./config/database.js"),
    bodyParser = require("body-parser"),
    app = express(),
    port = 10000;

// setting template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static Files
app.use(express.static('public'));

// routes
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login");
});

// port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
