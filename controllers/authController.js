const db = require('../config/database');

module.exports.dashboard = (req, res) => {
    res.render('index');
}

module.exports.getStudentLogin = (req, res) => {
    res.render('studentLogin');
};

module.exports.postStudentLogin = (req, res) => {
    const { email, password } = req.body;
    // query db to get the email and password for all students
    db.query('SELECT * FROM student;', (err, results) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < results.length; i++) {
            if (results[i].Email === email && results[i].Password === password) {
                // req.session.user = results[i];
                return res.redirect('/');
            }
        }
        res.redirect('/login/student');
    });
};

module.exports.getStudentRegister = (req, res) => {
    res.render('studentSignup');
};

module.exports.postStudentRegister = (req, res) => {
    const { name, email, password } = req.body;
    const id = email.split('@')[0].slice(-4);
    db.query('INSERT INTO student (StudentID, Name, Email, Password) VALUES (?, ?, ?, ?);', [id, name, email, password], (err, results) => {
        if (err) {
            console.log(err);
            res.redirect('/register/student');
        }
    });
    res.redirect('/login/student');
};

module.exports.getTeacherLogin = (req, res) => {
    res.render('teacherLogin');
};

module.exports.postTeacherLogin = (req, res) => {
    const { email, password } = req.body;
    // query db to get the email and password for all students
    db.query('SELECT * FROM teacher;', (err, results) => {
        if (err) {
            console.log(err);
        }
        for (let i = 0; i < results.length; i++) {
            if (results[i].Email === email && results[i].Password === password) {
                // req.session.user = results[i];
                return res.redirect('/');
            }
        }
        res.redirect('/login/teacher');
    });
};

module.exports.getTeacherRegister = (req, res) => {
    res.render('teacherSignup');
};

module.exports.postTeacherRegister = (req, res) => {
    const { name, email, password } = req.body;
    db.query('INSERT INTO teacher (Name, Email, Password) VALUES (?, ?, ?);', [name, email, password], (err, results) => {
        if (err) {
            console.log(err);
            res.redirect('/register/teacher');
        }
    });
    res.redirect('/login/teacher');
};

module.exports.logout = (req, res) => {
    // Logic to destroy the session
    res.redirect('/');
};
