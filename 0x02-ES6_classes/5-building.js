/**
 * Represents a building.
 */
export default class Building {
  /**
     * Creates a new building.
     * @param {number} sqft - The size of the building in square feet.
     */
  constructor(sqft) {
    if (new.target === Building) {
      throw new Error('Building is an abstract class and cannot be instantiated directly.');
    }
    this._sqft = sqft;
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  /**
     * Abstract method for evacuation warning message.
     * This must be implemented by any subclass of Building.
     */
  evacuationWarningMessage() {
    if (this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
