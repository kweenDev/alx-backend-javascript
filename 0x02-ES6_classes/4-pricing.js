import Currency from './3-currency';

/**
 * Represents a product's pricing
 */
export default class Pricing {
  /**
     * Creates a new pricing.
     * @param {number} amount - The amount of money.
     * @param {Currency} currency - The currency of the amount.
     */
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  // Getters and setters
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  /**
     * Returns the full price description.
     * @returns {string} The price description.
     */
  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  /**
     * Converts the price based on a conversion rate.
     * @param {number} amount - The amount to convert.
     * @param {number} conversionRate - The conversion rate.
     * @returns {number} The converted amount.
     */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
