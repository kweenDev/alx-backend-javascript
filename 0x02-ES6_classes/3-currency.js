/**
 * Class representing a Currency.
 * @class Currency
 */
export default class Currency {
  /**
     * Create a currency.
     * @param {string} code - The currency code.
     * @param {string} name - The currency name.
     */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
     * Display the full currency details.
     * @returns {string} The currency details in the format 'name (code)'.
     */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
