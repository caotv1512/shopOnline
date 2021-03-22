const Admin = require("../../model/admin.model")
const Users = require('../../model/user.model')
const Order = require('../../model/order.model')


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
exports.getOrder = async function (req, res, next) {
    const order = await Order.find({});
    res.render("admin/custom-order",{order })
}



