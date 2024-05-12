const db = require('../config/database');

exports.listBudgetItems = (req, res) => {
    db.query('SELECT * FROM Budget', (err, budgetItems) => {
        if (err) {
            console.error("Error fetching budget items:", err);
            res.status(500).send('Error fetching budget items');
        } else {
            res.render('budgetList', { budgetItems: budgetItems, user: req.session.user });
        }
    });
};

exports.addBudgetItem = (req, res) => {
    const { item, amount, category } = req.body;
    const query = 'INSERT INTO Budget (Item, Amount, Category) VALUES (?, ?, ?)';
    db.query(query, [item, amount, category], (err, result) => {
        if (err) {
            console.error("Error adding budget item:", err);
            res.status(500).send('Error adding budget item');
        } else {
            res.redirect('/budget');
        }
    });
};


exports.deleteBudgetItem = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Budget WHERE BudgetID = ?', [id], (err, result) => {
        if (err) {
            console.error("Error deleting budget item:", err);
            res.status(500).send('Error deleting budget item');
        } else {
            res.redirect('/budget');
        }
    });
};
