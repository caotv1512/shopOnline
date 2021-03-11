const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  email:  String, // String is shorthand for {type: String}
  password: String,
});

const admin = mongoose.model('admin', adminSchema);
module.exports = admin;

//chạy thử cho xem nhá
// ok