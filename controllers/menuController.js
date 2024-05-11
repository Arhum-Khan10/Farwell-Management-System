const db = require('../config/database');

// Display all menu items
exports.listMenuItems = (req, res) => {
    const query = 'SELECT * FROM MenuItem';
    db.query(query, (err, items) => {
        if (err) {
            console.log(err);
        } else {
            res.render('menuList', { items: items, user: req.session.user });
        }
    });
};

// Handle new menu item suggestion
exports.postMenuItemSuggestion = (req, res) => {
    const itemName = req.body.name;
    const query = 'INSERT INTO MenuItem (ItemName, Votes) VALUES (?, ?)';
    db.query(query, [itemName, 0], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/menu');
        }
    });
};

// Handle voting for a menu item
exports.voteMenuItem = (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE MenuItem SET Votes = Votes + 1 WHERE MenuItemID = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/menu');
        }
    });
};

// Handle deleting a menu item
exports.deleteMenuItem = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM MenuItem WHERE MenuItemID = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/menu');
        }
    });
};
