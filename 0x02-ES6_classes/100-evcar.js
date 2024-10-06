import Car from './10-car';

/**
 * Class representing an Electric Vehicle Car (EVCar).
 * Extends the Car class.
 */
class EVCar extends Car {
  /**
     * Create an EVCar.
     * @param {String} brand - The brand of the EV car.
     * @param {String} motor - The motor type of the EV car.
     * @param {String} color - The color of the EV car.
     * @param {String} range - The driving range of the EV car.
     */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  /**
     * Clone the EVCar object but return an instance of the Car class.
     * @return {Car} A new instance of Car (not EVCar).
     */
  cloneCar() {
    return new Car(); // Clone returns an instance of the parent Car class.
  }
}

export default EVCar;
