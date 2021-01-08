module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    if (req.session.user.admin != 'true') {
        res.status(401).render('401', {
            pageTitle: 'Unauthorized',
            path: '/401',
            isAuthenticated: req.session.isLoggedIn
        });
    }
    next();
}