// 100-weak.js

// Export a WeakMap instance
export const weakMap = new WeakMap();

/**
 * Function queryAPI
 * It should accept an endpoint argument
 * @param {*} endpoint - The endpoint to be queried
 */
// https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
export function queryAPI(endpoint) {
  let called = 0;
  // Check how many times the endpoint has been queried
  if (weakMap.get(endpoint)) called = weakMap.get(endpoint);
  weakMap.set(endpoint, called + 1);
  if (called + 1 >= 5) throw new Error('Endpoint load is high');
}
