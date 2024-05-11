function requireRole(role) {
    return function(req, res, next) {
        if (req.session.user && req.session.user.type === role) {
            next();
        } else {
            res.status(401).send('Unauthorized');
        }
    };
}

module.exports = requireRole;