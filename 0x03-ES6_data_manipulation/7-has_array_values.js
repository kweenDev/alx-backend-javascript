// 7-has_array_values.js
// Function to check if all array values exist in a set

/**
 * Function hasValuesFromArray
 * Checks if all array values exist in a set
 * @param {Set} set - The set to check against
 * @param {Array} array - The array of values to check
 * @returns {Boolean} - True if all values exist in the set, false otherwise
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
