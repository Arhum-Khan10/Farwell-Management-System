// global imports
const express = require("express"),
    db = require("./config/database"),
    bodyParser = require("body-parser"),
    indexRouter = require('./routes/index');
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
app.use('/', indexRouter);

// port
app.listen(port, () => {
    date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - Server is running on port ${port}`);
});
