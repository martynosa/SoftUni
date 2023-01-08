
let { expect, assert } = require('chai')
const lookupChar = require('../charLookup');

describe('test', () => {
    it('should return undefined when first parameter is not a string', () => {
        expect(lookupChar(undefined, 1)).to.equal(undefined);
        assert.strictEqual(lookupChar(undefined, 1), undefined);
    });

    it('should return undefined when second parameter is not integer', () => {
        expect(lookupChar('some', undefined)).to.equal(undefined);
        expect(lookupChar('some', 1.29)).to.equal(undefined);
        expect(lookupChar('some', '1')).to.equal(undefined);
    });

    it('should return "Incorrect index" when second parameter is not within index range', () => {
        expect(lookupChar('some', -1)).to.equal('Incorrect index');
        expect(lookupChar('some', 4)).to.equal('Incorrect index');

    });

    it('should return correct char when both parameters are valid', () => {
        expect(lookupChar('other', 0)).to.equal('o');
        expect(lookupChar('other', 3)).to.equal('e');

    });



});