// global consts
const express = require("express"),
    // db = require("./database.js"),
    bodyParser = require("body-parser"),
    app = express(),
    port = 10000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
