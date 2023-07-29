const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpController');

router.post('/sendOTP', otpController.sendOTP);
router.get('/sendOTP', otpController.sendOtpGet);
router.get('/verifyOTP', otpController.otpVerificationGet);
router.post('/verifyOTP', otpController.verifyOTP);



module.exports = router;
