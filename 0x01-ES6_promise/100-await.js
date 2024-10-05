import { uploadPhoto, createUser } from './utils.js';

/**
 * Asynchronously uploads a photo and creates a user.
 * @returns {Promise<Object>} An object containing the results of the two async operations.
 * If either operation fails, returns an object with both properties set to null.
 */
export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return {
      photo,
      user,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
