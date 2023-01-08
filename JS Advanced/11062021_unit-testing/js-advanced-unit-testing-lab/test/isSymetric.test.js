const isSymmetric = require('../isSymetric');
const { assert, expect } = require('chai');
require('chai').should()

describe('Test isSymetric functionallity', () => {
    it('Should pass when symetric array is provided', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });

    it('Should fail when non symetric array is provided', () => {
        let input = [1, 2, 3, 3, 1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);
    });
    
    it('Should fail when non array is provided as an argument', () => {
        let expectedResult = false;

        assert.equal(isSymmetric(null), expectedResult);
        assert.equal(isSymmetric({}), expectedResult);
        assert.equal(isSymmetric(''), expectedResult);
        assert.equal(isSymmetric(0), expectedResult);
        assert.equal(isSymmetric(true), expectedResult);
        assert.equal(isSymmetric(undefined), expectedResult);
    });

    it('Should pass when an empty array is provided', () => {
        let actualResult = isSymmetric([]);

        expect(actualResult).to.be.true;
    });

    it('Should pass when symetric string array is provided', () => {
        let actualResult = isSymmetric(['pesho','gosho','pesho']);

        expect(actualResult).to.be.true;
    });

    
    it('Should fail', () => {
        let actualResult = isSymmetric(['1', 1]);

        expect(actualResult).to.be.false;
    });

    it('should pass', () => {
        let actualResult = isSymmetric(['1', 1]);
        
        actualResult.should.be.equal(false);
    })
});