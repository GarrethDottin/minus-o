const httpStatus = require('http-status');
const User = require('./user.model');

/**
 * sendVerificationCode - Sends verification code for verifying a user's mobile number.
 * @property {string} req.body.mobileNumber - Mobile number of the user to be verified.
 * @returns {*}
 */
exports.sendVerificationCode = function sendVerificationCode(req, res) {
  const payload = req.body;
  if (!payload.mobileNumber) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: 'mobileNumber is required.' });
  }

  return User.sendVerificationCode(payload.mobileNumber)
    .then(() => res.send({ message: 'Verification code has been sent.' }))
    .catch((err) => {
      console.log('err: ', err);
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Verification code was not sent.' });
    });
};

/**
 * verifyCode - Verifies code for a user's mobile number.
 * @property {string} req.body.mobileNumber - Mobile number of the user to be verified.
 * @property {string} req.body.verificationCode - Verification code which was sent to the mobile number.
 * @returns {*}
 */
exports.verifyCode = function verifyCode(req, res) {
  const payload = req.body;
  if (!payload.mobileNumber) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: 'mobileNumber is required.' });
  }
  if (!payload.verificationCode) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: 'verificationCode is required.' });
  }

  return User.verifyCode(payload)
    .then(() => res.send({ message: 'Mobile number verified successfully.' }))
    .catch((err) => {
      console.log('err: ', err);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: err.message || 'Mobile number was not verified.' });
    });
};
