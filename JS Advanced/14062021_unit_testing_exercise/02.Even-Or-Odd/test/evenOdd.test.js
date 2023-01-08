const isOddOrEven = require('../evenOdd');
let { expect, assert } = require('chai');
//trivial cases
//1.bad cases -> throws or returns special value
//2.correct cases -> function works as expected
//2.1 standart cases
//2.2 edge cases that should pass (negative, integer, floating)
//think of ways to break the code

describe('test', () => {
    it('tes1', () => {
        expect(isOddOrEven(undefined)).to.equal(undefined);
        expect(isOddOrEven(null)).to.equal(undefined);
        expect(isOddOrEven(-1)).to.equal(undefined);
        expect(isOddOrEven(true)).to.equal(undefined);
    });

    it('should return even with even string', () => {
        expect(isOddOrEven('some')).to.equal('even');
        expect(isOddOrEven('bear')).to.equal('even');
    })

    it('should return odd with even odd string', () => {
        expect(isOddOrEven('tea')).to.equal('odd');
        expect(isOddOrEven('owl')).to.equal('odd');
    })



});
