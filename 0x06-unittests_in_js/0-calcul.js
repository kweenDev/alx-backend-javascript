// 0-calcul.js
/**
 * calculateNumber - Rounds two numbers and returns their sum
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The rounded sum of a and b
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;