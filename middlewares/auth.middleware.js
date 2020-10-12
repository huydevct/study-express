var db = require('../db');

module.exports.requireAuth = function(req,res,next) {
    // console.log(req.cookies, req.signedCookies);
    if(!req.signedCookies.userId){
        res.render('./auth/login');
        return;
    }

    var user = db.get('users').find({ 
        id: req.signedCookies.userId 
    }).value();

    if(!user){
        res.redirect('./auth/login');
        return;
    }

    res.cookie('userId', user.id, {
        signed: true
    });
    res.locals.user = user;

    next();
}