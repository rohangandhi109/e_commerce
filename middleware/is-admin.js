module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    bcrypt
        .compare(req.session.user.admin,)
        .then((doMatch) => {
            if (!doMatch) {
                res.status(401).render('401', {
                    pageTitle: 'Unauthorized',
                    path: '/401',
                    isAuthenticated: req.session.isLoggedIn
                });
            }
        });

    next();
}