const db = require('../config/database');

exports.listPerformances = (req, res) => {
    db.query('SELECT * FROM Performance', (err, performances) => {
        if (err) {
            console.error("Error fetching performances:", err);
            res.status(500).send('Error fetching performances');
        } else {
            res.render('performanceList', { performances: performances, user: req.session.user});
        }
    });
};

exports.postPerformance = (req, res) => {
    const { type, duration, requirements } = req.body;
    const proposedBy = req.session.user.id;
    const query = 'INSERT INTO Performance (Type, Duration, SpecialRequirements, ProposedBy) VALUES (?, ?, ?, ?)';
    db.query(query, [type, duration, requirements, proposedBy], (err, result) => {
        if (err) {
            console.error("Error adding performance:", err);
            res.status(500).send('Error adding performance');
        } else {
            res.redirect('/performances');
        }
    });
};

exports.deletePerformance = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Performance WHERE PerformanceID = ?', [id], (err, result) => {
        if (err) {
            console.error("Error deleting performance:", err);
            res.status(500).send('Error deleting performance');
        } else {
            res.redirect('/performances');
        }
    });
};
