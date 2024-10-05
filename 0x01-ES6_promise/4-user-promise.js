/**
 * Signs up a user and returns a resolved promise with the user's details.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise<Object>} A promise that resolves with an object containing
 * the first and last name.
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
