const nodemailer = require("nodemailer");
const Otp = require("../models/otpModel");

// sendOtp verified page
const sendOtpGet = async (req, res) => {
  return res.render("index", {error: ""});
}
// otpVerificationGet
const otpVerificationGet = async (req, res) => {
  return res.render("otpVerification", {error: ""});
}

// Function to send OTP via email
 const sendOTP = async (req, res) => {
  try {
    const { email } = req.body;
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

  // Save the OTP to the database (you can use any database, here we're using MongoDB with Mongoose)
 
let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.AUTH_EMAIL,
		pass: process.env.AUTH_PASSWORD,
	}
});
const mailOptions = {
	from: process.env.AUTH_EMAIL,
	to: email,
	subject: 'Test mail',
	text: `Your OTP for verification is: ${otpCode}`
}; 
const newOtp = new Otp({ email, otp: otpCode });
await newOtp.save();
await mailTransporter.sendMail(mailOptions);
// res.json({message:"Email sent successfully"});
return res.render("otpVerification")
  } catch (error) {
    return res.render("otpVerification");
  }
}


// Function to verify OTP
async function verifyOTP(req, res) {
  const { email, otp } = req.body;

  // Check if the OTP exists in the database
  const savedOtp = await Otp.findOne({ email, otp });

  if (savedOtp) {
    // Delete the OTP from the database as it's a one-time use
    await savedOtp.deleteOne();
    return res.render("userinfo");
  } else {
    return res.render("userinfo");
  }
}

module.exports = { sendOTP, verifyOTP, sendOtpGet, otpVerificationGet };
