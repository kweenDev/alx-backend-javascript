/* eslint-disable no-param-reassign */
// 10-update_uniq_items.js

/**
 * Function updateUniqueItems
 * Accepts a map and updates all items with a quantity
 * @param {list} map - The argument to be accepted
 * @returns - An updated map of all items with initial quantity at 1
 */
export default function updateUniqueItems(map) {
  // Check if the argument is a valid Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Update items with quantity of 1 to 100
  for (const [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
