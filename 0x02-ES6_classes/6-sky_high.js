import Building from './5-building';

/**
 * SkyHighBuilding class that extends the Building class.
 *
 * @class SkyHighBuilding
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
     * Creates an instance of SkyHighBuilding.
     *
     * @param {Number} sqft - The size in square feet.
     * @param {Number} floors - The number of floors.
     */
  constructor(sqft, floors) {
    super(sqft); // Calling parent class constructor
    this._floors = floors; // Additional property specific to this class
  }

  /**
     * Getter for the number of floors.
     *
     * @returns {Number} The number of floors.
     */
  get floors() {
    return this._floors;
  }

  /**
     * Override method for the evacuation warning message.
     *
     * @returns {String} Evacuation warning message.
     */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
