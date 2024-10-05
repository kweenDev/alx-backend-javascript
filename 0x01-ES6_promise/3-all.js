import { uploadPhoto, createUser } from './utils.js';

/**
 * Handles the profile signup by resolving multiple promises.
 * @returns {Promise<void>} A promise that logs the photo, first name, and last name,
 * or logs 'Signup system offline' in case of an error.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
