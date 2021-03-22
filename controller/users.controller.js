const User = require("../model/user.model")
const Product = require('../model/product.model')
const Order = require('../model/order.model')

exports.getLogin = function (req, res, next) {
    
    res.render("admin/login")
}
exports.getThanhToan = async function (req, res, next) {
    const id = req.params.id;
    const productId = await Product.findById({ _id: id });
    res.render("users/thanhtoan",{productId})
}
exports.postThanhToan = async function (req, res, next) {
    const errors = [];
    if (!req.body.userName) {
        errors.push('Name is required!')
    }
    if (!req.body.address) {
        errors.push('Price is required!')
    }
    if (!req.body.phone) {
        errors.push('Content is required!')
    }

    if (errors.length) {
        res.render("users/thanhtoan", {
            errors: errors,
            values: req.body
        });
        return;
    }
    const data = {
        ...req.body
    }
    console.log(data);
    // try {
    //     const order = await Order.create(data)
    //     res.redirect('order-successful')

    // } catch (error) {
    //     console.log(error);
    // }
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

