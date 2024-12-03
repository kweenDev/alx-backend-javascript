// 5-payment.test.js
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
    it('should use Utils.calculateNumber', function () {
      const spy = sinon.spy(Utils, 'calculateNumber');
      sendPaymentRequestToApi(100, 20);
      sinon.assert.calledWith(spy, 'SUM', 100, 20);
      spy.restore();
    });
});