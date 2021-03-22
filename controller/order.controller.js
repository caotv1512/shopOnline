const Order = require('../model/order.model')

exports.getOrder = function (req, res, next) {
    res.render("users/thanhtoan")
}
exports.postOrder = async function (req, res, next) {
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

    const { userName, address, phone } = req.body;
    const data = {
        userName, address, phone, productId
    }
    try {
        const order = await Order.create(data)
        console.log(order);
        res.redirect('order-successful')

    } catch (error) {
        console.log(error);
    }

}
