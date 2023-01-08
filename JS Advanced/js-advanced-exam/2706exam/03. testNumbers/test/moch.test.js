const testNumbers = require('../moch');
const { expect } = require('chai');

describe("testNumbers", () => {
    describe("sumNumbers", () => {
        it("wrong inputs = undefined", () => {
            expect(testNumbers.sumNumbers(undefined, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, undefined)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(2)).to.be.undefined;
            expect(testNumbers.sumNumbers()).to.be.undefined;


        });
        it("wrong negative/edge", () => {
            expect(testNumbers.sumNumbers(-1, 2)).to.equal('1.00');
            expect(testNumbers.sumNumbers(1, -2)).to.equal('-1.00');
            expect(testNumbers.sumNumbers(0, 0)).to.equal('0.00');
        });

        it("trivial + rounding", () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1, 2, 3)).to.equal('3.00');
            expect(testNumbers.sumNumbers(1.1, 2.2)).to.equal('3.30');
            expect(testNumbers.sumNumbers(1, 2.2)).to.equal('3.20');
            expect(testNumbers.sumNumbers(1.1, 2)).to.equal('3.10');
            expect(testNumbers.sumNumbers(-1.1, 2)).to.equal('0.90');
            expect(testNumbers.sumNumbers(1.1, -2.2)).to.equal('-1.10');
            expect(testNumbers.sumNumbers(-1.1, -2.2)).to.equal('-3.30');
            expect(testNumbers.sumNumbers(1.111111, 2.2)).to.equal('3.31');
            expect(testNumbers.sumNumbers(1.1, 2.2111111)).to.equal('3.31');
            expect(testNumbers.sumNumbers(1.11111, 2.2111111)).to.equal('3.32');
        });




    });

    describe("numberChecker", () => {
        it('validation = not a number', () => {
            expect(() => testNumbers.numberChecker()).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker('hello')).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker([5, 6])).to.throw('The input is not a number!');
            expect(() => testNumbers.numberChecker({ hi: 5 })).to.throw('The input is not a number!');

        })

        it('trivial+edge', () => {
            expect(testNumbers.numberChecker(2, 5, 10)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(3.3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(2.2)).to.equal('The number is odd!');

            //negative
            expect(testNumbers.numberChecker(-2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(-3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(0)).to.equal(`The number is even!`);
            expect(testNumbers.numberChecker(-3.3)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(-2.2)).to.equal('The number is odd!');

        })



    });

    describe("averageSumArray", () => {

        it('trivial', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
            expect(testNumbers.averageSumArray([-1, 2])).to.equal(0.5);
            expect(testNumbers.averageSumArray([1, -2])).to.equal(-0.5);
            expect(testNumbers.averageSumArray([])).to.be.NaN;
            expect(testNumbers.averageSumArray([1, undefined, 2])).to.be.NaN
        })


        it('invalid inputs', () => {
            expect(testNumbers.averageSumArray([1, '2'])).to.equal(6);
            expect(testNumbers.averageSumArray(['1', 2])).to.equal(6);
            expect(testNumbers.averageSumArray([0, 0])).to.equal(0);
            expect(testNumbers.averageSumArray([1.1, 2.1])).to.equal(3.2 / 2);
            expect(testNumbers.averageSumArray([1, 2.1])).to.equal(3.1 / 2);
            expect(testNumbers.averageSumArray([1.1, 2])).to.equal(3.1 / 2);
        })


    })


});