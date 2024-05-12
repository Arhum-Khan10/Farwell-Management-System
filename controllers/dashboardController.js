const db = require('../config/database');

module.exports.renderDashboard = (req, res) => {
    if (req.session.user) {
        return res.render('dashboard', { user: req.session.user });
    }
    res.redirect('/');
};