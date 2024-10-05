/**
 * Handles the response from a given Promise.
 * @param {Promise} promise - A Promise to handle.
 * @returns {Promise<Object>} Promise that resolves to an object with status 200 and body
 * 'success', or an empty Error object if rejected.
 * Logs "Got a response from the API" on every resolution.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => new Error());
}
