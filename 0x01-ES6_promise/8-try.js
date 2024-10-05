/**
 * Divides two numbers and throws an error if the denominator is zero.
 * @param {number} numerator - The number to be divided.
 * @param {number} denominator - The number by which the numerator is divided.
 * @returns {number} The result of the division.
 * @throws {Error} If the denominator is 0, an error is thrown.
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}
