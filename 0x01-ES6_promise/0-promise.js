/**
 * Returns a Promise that resolves to "true".
 * @returns {Promise<boolean>} A promise that resolves to true.
 */
export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    resolve(true);
  });
}
