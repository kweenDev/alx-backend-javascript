/**
 * @class Car
 * Represents a car with a brand, motor, and color.
 */
export default class Car {
  /**
     * @constructor
     * @param {String} brand - The brand of the car.
     * @param {String} motor - The type of engine of the car.
     * @param {String} color - The color of the car.
     */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
     * Display car details in the format brand motor and color.
     * @returns {String} Car details in the required format.
     */
  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
