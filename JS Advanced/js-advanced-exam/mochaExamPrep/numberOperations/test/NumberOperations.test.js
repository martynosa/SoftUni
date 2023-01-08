const numberOperations = require('../NumberOperations');
const { expect, assert } = require('chai');

describe("Tests …", () => {
    describe('powNumber', () => {
        it("return the number * number", () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });

        it("return the number * number when floating point number is passed", () => {
            expect(numberOperations.powNumber(2.2)).to.be.closeTo(4.84, 0.1);
        });

        it("return the number * number when string number is passed", () => {
            expect(numberOperations.powNumber('2')).to.equal(4);
        });

        it("should return NaN when non number is passed", () => {
            expect(numberOperations.powNumber('hello')).to.be.NaN;
        });

        it("should return NaN when no input is passed", () => {
            expect(numberOperations.powNumber()).to.be.NaN;
        });

        it("should return the first number * number when more args are passed", () => {
            expect(numberOperations.powNumber(2, 5)).to.equal(4);
        });

        it("should return 0", () => {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });

        it("should return 25 when negative number is provided", () => {
            expect(numberOperations.powNumber(-5)).to.equal(25);
        });

        it("return the number * number when floating point number is passed", () => {
            expect(numberOperations.powNumber(-2.2)).to.be.closeTo(4.84, 0.1);
        });

    });

    describe('numberChecker', () => {
        it('should throw and error when non number is passed', () => {
            expect(() => numberOperations.numberChecker('hello')).to.throw('The input is not a number!');

        })

        // it('should throw and error when non number is passed', () => {
        //     expect(() => numberOperations.numberChecker(true)).to.throw('The input is not a number!');

        // })

        it('should throw and error when nothing is passed', () => {
            expect(() => numberOperations.numberChecker()).to.throw('The input is not a number!');

        })




        it('should work with more args', () => {
            expect(numberOperations.numberChecker(5, 50)).to.equal('The number is lower than 100!');

        })


        it('should parse the string into number and return', () => {
            expect(numberOperations.numberChecker('5')).to.equal('The number is lower than 100!')

        })


        it('should return < 100 with regular', () => {
            expect(numberOperations.numberChecker(50)).to.equal('The number is lower than 100!')

        })

        it('should return < 100 with floating pint', () => {
            expect(numberOperations.numberChecker(50, 5)).to.equal('The number is lower than 100!')

        })



        it('should return < 100 with 0', () => {
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!')

        })

        it('should return < 100 with negative', () => {
            expect(numberOperations.numberChecker(-5)).to.equal('The number is lower than 100!')

        })

        it('should return > 100 with edge', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')

        })

        it('should return > 100 with regular', () => {
            expect(numberOperations.numberChecker(50000)).to.equal('The number is greater or equal to 100!')

        })

        it('should return > 100 with floating point', () => {
            expect(numberOperations.numberChecker(500.55)).to.equal('The number is greater or equal to 100!')

        })

        it('should return > 100 with edge', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!')

        })

        it('should return < 100 with edge', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!')

        })




    })

    describe('sumArrays', () => {
        it('should work trivial', () => {
            let firstArr = [1, 2, 3];
            let secondArr = [4, 5, 6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [5, 7, 9]);
        })

        it('should work with negative', () => {
            let firstArr = [-1, -2, -3];
            let secondArr = [-4, -5, -6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [-5, -7, -9]);
        })

        it('should work with negative', () => {
            let firstArr = [-1, 2, 3];
            let secondArr = [4, 5, 6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [3, 7, 9]);
        })

        it('should work with negative', () => {
            let firstArr = [1, -2, 3];
            let secondArr = [4, 5, 6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [5, 3, 9]);
        })

        it('should work with negative', () => {
            let firstArr = [1, 2, -3];
            let secondArr = [4, 5, 6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [5, 7, 3]);
        })

        it('should work with negative', () => {
            let firstArr = [1, 2, 3];
            let secondArr = [-4, 5, 6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [-3, 7, 9]);
        })

        it('should work with negative', () => {
            let firstArr = [1, 2, 3];
            let secondArr = [4, -5, 6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [5, -3, 9]);
        })

        it('should work with negative', () => {
            let firstArr = [1, 2, 3];
            let secondArr = [4, 5, -6];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [5, 7, -3]);
        })

        it('should work with empty', () => {
            let firstArr = [];
            let secondArr = [];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), []);
        })

        it('should work with undefined index', () => {
            let firstArr = [1, undefined, 3];
            let secondArr = [1, 2, 3];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [2, NaN, 6]);
        })


        it('should work with floating point', () => {
            let firstArr = [1.5, 2.5, 3.5];
            let secondArr = [2.5, 3.5, 6.5];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [4, 6, 10]);
        })

        it('should work with strings', () => {
            let firstArr = [1, 2, 3];
            let secondArr = ['a', 'b', 'c'];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), ['1a', '2b', '3c']);
        })

        it('should work with diff length', () => {
            let firstArr = [1, 2, 3];
            let secondArr = [1, 2];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [2, 4, 3]);
        })


        it('should work with diff length', () => {
            let firstArr = [1, 2,];
            let secondArr = [1, 2, 3];

            assert.deepEqual(numberOperations.sumArrays(firstArr, secondArr), [2, 4, 3]);
        })


    })

});

// describe("Test numberOperations", function () {
//     describe("powerNumber", function () {
//         it("test with integers", function () {
//             assert.strictEqual(numberOperations.powNumber(1.1), 1.2100000000000002); // probebly wrong
//             assert.strictEqual(numberOperations.powNumber(2), 4);
//             assert.strictEqual(numberOperations.powNumber(-3), 9);
//             assert.strictEqual(numberOperations.powNumber(0), 0);
//             assert.strictEqual(numberOperations.powNumber(-2.2), 4.840000000000001); // probebly wrong
//         });
//     });
//     describe("numberChecker", function () {
//         it("test with numbers < 100", function () {
//             assert.strictEqual(numberOperations.numberChecker(1.1), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(2), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(-3), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(0), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(-99), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(99), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(50), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker('99'), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker('0'), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker('50'), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(null), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker([]), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(''), 'The number is lower than 100!');
//             assert.strictEqual(numberOperations.numberChecker(false), 'The number is lower than 100!');
//         });
//         it("test with numbers >= 100", function () {
//             assert.strictEqual(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker(1000), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker(10000), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker(101), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker(10000000), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker(999), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker('150'), 'The number is greater or equal to 100!');
//             assert.strictEqual(numberOperations.numberChecker('100'), 'The number is greater or equal to 100!');
//         });
//         it("test with invalid data", function () {
//             assert.throw(() => numberOperations.numberChecker('abc'));
//             assert.throw(() => numberOperations.numberChecker({}));
//             assert.throw(() => numberOperations.numberChecker([1, 2, 3]));
//             assert.throw(() => numberOperations.numberChecker(() => { }));
//         });
//     });

//     describe("sumArrays", function () {
//         it("test with numbers < 100", function () {
//             assert.deepEqual(numberOperations.sumArrays([1, 2], [3, 4, 5]), [ 4, 6, 5 ]);
//             assert.deepEqual(numberOperations.sumArrays([1.1, 2.3], [3.7, 4.9, 5.8]), [ 4.800000000000001, 7.2, 5.8 ]);
//             assert.deepEqual(numberOperations.sumArrays([0, 0], [0, 0, 0]), [ 0, 0, 0 ]);
//             assert.deepEqual(numberOperations.sumArrays([1, 2, 8, 100], [3, 4, 5]), [4, 6, 13, 100]);
//             assert.deepEqual(numberOperations.sumArrays([1.1, 2.3, 100.1, 200.1], [3.7, 4.9, 5.8]), [ 4.800000000000001, 7.2, 105.89999999999999, 200.1 ]);
//             assert.deepEqual(numberOperations.sumArrays([1, 2, 100, 200], [3.7, 4.9, 5.8]), [ 4.7, 6.9, 105.8, 200 ]);
//             assert.deepEqual(numberOperations.sumArrays([1, 2, 100, 200], [3, 5, 100, 400]), [ 4, 7, 200, 600 ]);
//             assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], [3, 5, 100, 400]), [ 'a3', 'b5', 'c100', 400 ]);
//             assert.deepEqual(numberOperations.sumArrays([1, 2, 3], [1, 2, 3]), [ 2, 4, 6 ]);
//        });
//     });
// });

