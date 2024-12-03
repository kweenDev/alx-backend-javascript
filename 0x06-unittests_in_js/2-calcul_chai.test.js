// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 6 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -4 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.2 when inputs are 1.4 and 4.5', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });

        it('should return "Error" when divisor is 0', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});