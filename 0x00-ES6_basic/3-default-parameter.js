/**
 * Adds three numbers together, with default values for the last two parameters.
 * @param {number} initialNumber - The initial number.
 * @param {number} [expansion1989=89] - The number from 1989 expansion (default is 89).
 * @param {number} [expansion2019=19] - The number from 2019 expansion (default is 19).
 * @returns {number} - The sum of the numbers.
 */
export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
