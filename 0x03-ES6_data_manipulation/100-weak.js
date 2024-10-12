// 100-weak.js

// Export a WeakMap instance
export const weakMap = new WeakMap();

/**
 * Function queryAPI
 * It should accept an endpoint argument
 * @param {*} endpoint - The endpoint to be queried
 */
export function queryAPI(endpoint) {
  // Check how many times the endpoint has been queried
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count + 1);
  }
}
