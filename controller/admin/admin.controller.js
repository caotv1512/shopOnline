const Admin = require("../../model/admin.model")


exports.getIndex = function (req, res, next) {
    res.render("admin/admin")
}
exports.getAdmin = function (req, res, next) {
    res.render("admin/createAcount")
}
exports.postIndex = async function (req, res, next) {
    await Admin.create(req.body)
    console.log(req.body)
    res.redirect('admin/all-acount')
}

