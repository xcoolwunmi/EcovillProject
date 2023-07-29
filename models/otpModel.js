const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 60 * 5, // The OTP will be deleted after 5 minutes (adjust as per your requirement)
    default: Date.now,
  },
});

const Otp = mongoose.model('Otp', otpSchema);

module.exports = Otp;
