/**
 * Defines a class that holds a list of San Francisco neighborhoods and adds new ones.
 */
export default function getNeighborhoodsList() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    /**
     * Adds a neighborhood to the list.
     * @param {string} newNeighborhood - The new neighborhood to add.
     * @returns {Array} - Updated list of neighborhoods.
     */
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
}