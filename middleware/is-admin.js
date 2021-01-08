module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    if (!req.session.user.admin != 'true') {
        console.log(req.session.user)
        console.log(req.session.user.admin)
        const error = new Error("You are not authorized");
        error.httpStatusCode = 401;
        return next(error);
    }
    next();
}