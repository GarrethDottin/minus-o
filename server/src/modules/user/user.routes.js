const express = require('express');
const userCtrl = require('./user.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/number-verification')
/** POST /api/users/number-verification - Send verification code to the mobile number. */
.post(userCtrl.sendVerificationCode);

router.route('/verify-verification-code')
/** POST /api/users/verify-verification-code - Verifies code that was sent to the mobile number. */
.post(userCtrl.verifyCode);

module.exports = router;
