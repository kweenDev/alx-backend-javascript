// 3-payment.js
const Utils = require('./utils');

/**
 * Simulates a payment request to an API.
 * @param {number} totalAmount - The total amount to pay.
 * @param {number} totalShipping - The shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const total = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToApi;
