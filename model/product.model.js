const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  content: String,
  price: String,
  image: String,
});

const product = mongoose.model('product', productSchema);
module.exports = product;

//chạy thử cho xem nhá
// ok