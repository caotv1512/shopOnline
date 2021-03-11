const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name:  String, // String is shorthand for {type: String}
  age: String
});

const user = mongoose.model('user', userSchema);
module.exports = user;