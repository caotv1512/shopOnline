const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  categoryId: {
    type: mongoose.Schema.ObjectId,
    ref: "Category",
    required: [true, "A Course Need In Category"]
  },
  name:  String, // String is shorthand for {type: String}
  content: String,
  price: String,
  image: String,
});

const product = mongoose.model('product', productSchema);
module.exports = product;

//chạy thử cho xem nhá
// ok