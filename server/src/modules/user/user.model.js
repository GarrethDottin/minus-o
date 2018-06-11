const randomId = require('random-id');
const twilio = require('../../services/twilio');

global.verifications = {};

const VERIFICATION_CODE_LENGTH = 6;
const VERIFICATION_MESSAGE = 'Your verification code for Minus-O is';

/**
 * sendVerificationCode - Sends verification code to user mobile number
 * @param number - User number to be verified.
 * @returns {Promise<*>}
 */
exports.sendVerificationCode = function sendVerificationCode(number) {
  const verificationCode = randomId(VERIFICATION_CODE_LENGTH, '0');
  return twilio.sendTwilioMessage(number, `${VERIFICATION_MESSAGE} ${verificationCode}`)
    .then((message) => {
      debugger;
      global.verifications[number] = verificationCode;
      console.log(message);
      return message;
    });
};

/**
 * verifyCode - Verifies code for a user's mobile number.
 * @property {string} mobileNumber - Mobile number of the user to be verified.
 * @property {string} verificationCode - Verification code which was sent to the mobile number.
 * @returns {*}
 */
exports.verifyCode = function verifyCode({ mobileNumber, verificationCode }) {
  if (!global.verifications[mobileNumber]) {
    return Promise.reject({ message: 'No verification code was sent.'});
  }
  if (global.verifications[mobileNumber] === verificationCode) {
    return Promise.resolve({ message: 'Mobile number has been verified.'});
  }
  return Promise.reject({ message: 'Verification code did not match.'});
};
