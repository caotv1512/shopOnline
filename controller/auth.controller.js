const db = require("../model/admin.model")

exports.getLogin = function (req, res, next) {
    res.render("admin/login")
}
exports.postLogin = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    const User = db.get('admin').find({ email:email}).value();
    if (!User) {
        res.render('admin/login', {
            errors: [
                'User does not exist.'
            ],
            values: req.body
        });
        return;
    }
    if (User.password !== password) {
        res.render('admin/login', {
            errors: [
                'Wrong password.'
            ],
            values: req.body
        });
        return;
    }
    res.redirect("home")
}