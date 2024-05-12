function requireRoles(allowedRoles) {
    return function(req, res, next) {
        // Check if the session has user and that user has roles
        if (req.session.user && req.session.user.type) {
            // Check if any user role is in the allowedtype array
            const hasPermission = req.session.user.type.some(type => allowedRoles.includes(type));

            if (hasPermission) {
                next();
            } else {
                res.status(401).send('Unauthorized');
            }
        } else {
            res.status(401).send('Unauthorized');
        }
    };
}

module.exports = requireRoles;
