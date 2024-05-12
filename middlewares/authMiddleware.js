function authMiddleware(req, res, next) {
    // Allow access without login to these paths
    const openPaths = ['/', '/auth/login/student', '/auth/register/student', '/auth/login/teacher', '/auth/register/teacher', '/public'];

    // debug
    console.log('Session ID:', req.sessionID);
    console.log('Session user:', req.session.user);

    // Check if the request path is one of the open paths
    if (openPaths.includes(req.path)) {
        next();  // Continue to the route handler
    } else if (req.session.user) {
        next();  // User is logged in, continue to the route handler
    } else {
        // User is not logged in, redirect to login page
        res.redirect('/auth/login/student');
    }
}

module.exports = authMiddleware;
