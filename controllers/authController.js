const db = require('../config/database');

module.exports.getStudentLogin = (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
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
                req.session.user = { id: results[i].StudentID, type: ['student', results[i].Role] };
                return res.redirect('/dashboard');
            }
        }
        res.redirect('/auth/login/student');
    });
};

module.exports.getStudentRegister = (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('studentSignup');
};

module.exports.postStudentRegister = (req, res) => {
    const { name, email, password } = req.body;
    const id = email.split('@')[0].slice(-4);
    db.query('INSERT INTO student (StudentID, Name, Email, Password) VALUES (?, ?, ?, ?);', [id, name, email, password], (err, results) => {
        if (err) {
            console.log(err);
            res.redirect('/auth/register/student');
        }
    });
    res.redirect('/auth/login/student');
};

module.exports.getTeacherLogin = (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
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
                req.session.user = { id: results[i].TeacherID, type: ['teacher', 'teacher'] };
                return res.redirect('/dashboard');
            }
        }
        res.redirect('/auth/login/teacher');
    });
};

module.exports.getTeacherRegister = (req, res) => {
    if (req.session.user) {
        return res.redirect('/dashboard');
    }
    res.render('teacherSignup');
};

module.exports.postTeacherRegister = (req, res) => {
    const { name, email, password, family } = req.body;
    // using family member name create new family number and assign it to the teacher
    db.query('INSERT INTO FamilyMember (Name) VALUES (?);', [family], (err, results) => {
        if (err) {
            console.log(err);
            res.redirect('/auth/register/teacher');
        }
    });

    db.query('INSERT INTO teacher (Name, Email, Password) VALUES (?, ?, ?);', [name, email, password], (err, results) => {
        if (err) {
            console.log(err);
            res.redirect('/auth/register/teacher');
        }
        // get teacher id of the teacher that was just created
        db.query('SELECT TeacherID FROM teacher WHERE Email = ?;', [email], (err, results) => {
            if (err) {
                console.log(err);
                res.redirect('/auth/register/teacher');
            }
            // assign the teacher to the family member
            db.query('UPDATE FamilyMember SET TeacherID = ? WHERE Name = ?;', [results[0].TeacherID, family], (err, results) => {
                if (err) {
                    console.log(err);
                    res.redirect('/auth/register/teacher');
                }
            });
        });
    });
    res.redirect('/auth/login/teacher');
};

module.exports.logout = (req, res) => {
    const person = req.session.user.type;
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        }
        if (person === 'teacher') {
            return res.redirect('/auth/login/teacher');
        }
        res.redirect('/auth/login/student');
    });
};
