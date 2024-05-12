const db = require('../config/database');

module.exports.renderDashboard = (req, res) => {
    if (!req.session.user) {
        res.redirect('/');
    }

    db.query('SELECT Category, SUM(Amount) AS Total FROM Budget GROUP BY Category', (err, budgetData) => {
        if (err) {
            console.error("Error fetching budget data:", err);
            return res.status(500).send('Error fetching budget data');
        }

        db.query('SELECT ItemName, Votes FROM MenuItem', (err, menuData) => {
            if (err) {
                console.error("Error fetching menu data:", err);
                return res.status(500).send('Error fetching menu data');
            }

            db.query('SELECT Type, COUNT(*) AS Count FROM Performance GROUP BY Type', (err, performanceData) => {
                if (err) {
                    console.error("Error fetching performance data:", err);
                    return res.status(500).send('Error fetching performance data');
                }

                res.render('dashboard', {
                    user: req.session.user,
                    budgetData: JSON.stringify(budgetData),
                    menuData: JSON.stringify(menuData),
                    performanceData: JSON.stringify(performanceData)
                });
            });
        });
    });
};