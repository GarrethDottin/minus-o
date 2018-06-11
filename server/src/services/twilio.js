const twilio = require('twilio');
const config = require('../../config');
const twilioClient = new twilio(config.twilio.accountSid, config.twilio.authToken);

/**
 * sendTwilioMessage - Sends message to a given mobile number
 * @param number - Number to be sent the sms
 * @param message - Message body to be sent
 * @returns {Promise<*>}
 */
exports.sendTwilioMessage = function sendTwilioMessage(number, message) {
  return twilioClient.messages.create({
    body: message,
    to: number,
    from: config.twilio.fromNumber,
  });
};
