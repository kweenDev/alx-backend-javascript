// 2-calcul_chai.js
/**
 * calculateNumber - Rounds two numbers and performs an operation
 * @param {string} type - The operation to perform (SUM, SUBTRACT, DIVIDE)
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number|string} Result of the operation or 'Error' if invalid
 */
function calculateNumber(type, a, b) {
    const roundA = Math.round(a);
    const roundB = Math.round(b);

    switch (type) {
        case 'SUM':
            return roundA + roundB;
        case 'SUBTRACT':
            return roundA - roundB;
        case 'DIVIDE':
            if (roundB === 0) return 'Error';
            return roundA / roundB;
        default:
            throw new Error('Invalid operation type');
    }
}

module.exports = require('./1-calcul');
