// file imports
const db = require("./config/database"),
    authMiddleware = require('./middlewares/authMiddleware'),
    indexRouter = require('./routes/index');

// package imports
const express = require("express"),
    bodyParser = require("body-parser"),
    session = require('express-session');
    MySQLStore = require('express-mysql-session')(session),
    sessionStore = new MySQLStore({
        host: "localhost",
        user: "root",
        password: "1234",
        port: 3306,
        database: "fms"
    });

// global variables
port = 10000;

// express
app = express();

// setting template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use(express.static('public'));

// session
app.use(session({
    key: 'farewell',
    secret: '123farewell123',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 30 } // 30 minutes
}));
app.use(authMiddleware);

// routes
app.use('/', indexRouter);

// port
app.listen(port, () => {
    date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - Server is running on port ${port}`);
});
