/**
 * Uploads a photo and returns a rejected promise.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise<Error>} A promise that rejects with an error indicating the
 * file cannot be processed.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
