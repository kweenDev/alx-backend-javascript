import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles the profile signup process, calling both signUpUser and uploadPhoto.
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @param {string} fileName - The name of the file to upload.
 * @returns {Promise<Object[]>} A promise that resolves with an array of
 * objects describing the status and value of each promise.
 */
export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise]).then((values) => {
    const result = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        result.push({ status: element.status, value: element.value });
      } else {
        result.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return result;
  });
}
