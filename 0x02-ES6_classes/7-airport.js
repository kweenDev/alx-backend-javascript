/**
 * Airport class representing an airport.
 *
 * @class Airport
 */
export default class Airport {
  /**
     * Creates an instance of Airport.
     *
     * @param {String} name - The name of the airport.
     * @param {String} code - The code of the airport.
     */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
     * Override toString method to return the airport code.
     *
     * @returns {String} The airport code.
     */
  toString() {
    return `[object ${this._code}]`;
  }
}
