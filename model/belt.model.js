const mongoose = require('mongoose');
const { Schema } = mongoose;

const beltSchema = new Schema({
 
  name:  String, // String is shorthand for {type: String}
  content: String,
  price: String,
  avatar: String,
  image1: String,
  image2: String,
  image3: String,
  discount: String,
  Origin: String,
  category: String,
  size: String
  

});

const Belt = mongoose.model('belt', beltSchema);
module.exports = Belt;

//chạy thử cho xem nhá
// ok