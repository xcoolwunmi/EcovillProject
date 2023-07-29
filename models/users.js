const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  Address: {
    type: String, 
    required: true
  },
 Zone: {
    type: String, 
    required: true
  },
  resetToken: String
});

module.exports = mongoose.model('User', userSchema);
