// 9-groceries_list.js

/**
 * Function groceriesList
 * @returns - A map of groceries with their names and quantities
 */
export default function groceriesList() {
  // Create a map with grocery items and quantities
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}
