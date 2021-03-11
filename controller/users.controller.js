const User = require("../model/user.model")
const Product = require('../model/product.model')

exports.getLogin = function (req, res, next) {
    
    res.render("admin/login")
}
exports.getThanhToan = function (req, res, next) {
    res.render("users/thanhtoan")
}
exports.index = async function (req, res, next) {
    const product = await Product.find({});
    res.render("index",{product })
}
exports.getIndex = function (req, res, next) {
    res.render("users/user")
}
exports.searchUser = function (req, res, next) {
    const q = req.query.q;
    const matchedUsers = users.filter(function(users){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    })
    res.render("users/all-users", {
        users: matchedUsers
    })
}

exports.postIndex = async function (req, res, next) {
    await User.create(req.body)
    res.redirect('all-users')
}
exports.getUserId = async function (req, res, next) {

    // const {id} = req.params;
    const id = req.params.id;
    const userId = await User.findById({ _id: id });
    res.render("users/user-detail",{userId})

}

exports.getAllUsers = async function (req, res, next) {
    console.log("hi");
    const user = await User.find({});
    console.log(user);
    res.render("users/all-users", { user })
}

