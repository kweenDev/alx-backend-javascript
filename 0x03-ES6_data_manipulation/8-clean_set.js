// 8-clean_set.js

/**
 * Function cleanSet
 * @param {Array} set - The set containing values
 * @param {string} startString - A string containing all the set values
 * @returns - A string of all the set values
 */
export default function cleanSet(set, startString) {
  // Handle edge case where startString is empty
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  // Filter set elements that start with startString and remove the startString part
  const result = Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  // Join the results with a dash if any matched
  return result.join('-');
}
