const db = require('../config/database');

exports.listTasks = (req, res) => {
    db.query('SELECT * FROM Task', (err, tasks) => {
        if (err) {
            console.error("Error fetching tasks:", err);
            res.status(500).send('Error fetching tasks');
        } else {
            res.render('taskList', { tasks: tasks, user: req.session.user });
        }
    });
};

exports.createTask = (req, res) => {
    let { description, deadline, assigned } = req.body;
    const query = 'INSERT INTO Task (Description, Status, Deadline, AssignedTo) VALUES (?, ?, ?, ?)';
    db.query(query, [description, "In Progress", deadline, assigned], (err, result) => {
        if (err) {
            console.error("Error creating task:", err);
            res.status(500).send('Error creating task');
        } else {
            res.redirect('/tasks');
        }
    });
};

exports.deleteTask = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Task WHERE TaskID = ?', [id], (err, result) => {
        if (err) {
            console.error("Error deleting task:", err);
            res.status(500).send('Error deleting task');
        } else {
            res.redirect('/tasks');
        }
    });
};
