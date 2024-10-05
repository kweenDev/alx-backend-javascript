/**
 * Returns a Promise based on the provided boolean.
 * @param {boolean} success - A boolean that determines the resolution or rejection of the promise.
 * @returns {Promise<Object>} A promise that resolves with an object if success is true,
 * or rejects with an error message if success is false.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ status: 200, body: 'Success' });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
