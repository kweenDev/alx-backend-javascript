import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

/**
 * Handles the profile signup process, calling both signUpUser and uploadPhoto.
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise<Object[]>} A promise that resolves with an array of objects describing the status and value of each promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const upload = uploadPhoto(fileName);

  return Promise.allSettled([signUp, upload])
    .then((results) => results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    })));
}
