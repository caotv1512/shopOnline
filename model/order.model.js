const mongoose = require('mongoose');
const { Schema } = mongoose;
const orderSchema = new Schema({
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Products",
    },
    userName: String,
    address: String,
    phone: String,
    isfConfim: {
        type: Boolean,
        default: false
    }

})

const order = mongoose.model('order', orderSchema);
module.exports = order;