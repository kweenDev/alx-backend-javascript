/**
 * HolbertonClass representing a class in Holberton School.
 *
 * @class HolbertonClass
 */
export default class HolbertonClass {
  /**
     * Creates an instance of HolbertonClass.
     *
     * @param {Number} size - The size of the class.
     * @param {String} location - The location of the class.
     */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
     * Override valueOf method to return class size when cast to a number.
     *
     * @returns {Number} The size of the class.
     */
  valueOf() {
    return this._size;
  }

  /**
     * Override toString method to return class location when cast to a string.
     *
     * @returns {String} The location of the class.
     */
  toString() {
    return this._location;
  }
}
