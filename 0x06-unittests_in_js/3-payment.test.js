// 3-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;

    calculateNumberSpy.restore();
  });
});
