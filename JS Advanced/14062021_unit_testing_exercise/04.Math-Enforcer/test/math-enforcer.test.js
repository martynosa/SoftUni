const mathEnforcer = require("../math-enforcer")

let { expect, assert } = require('chai')



describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined when parameter is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive('20')).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        })
        it('should return number plus 5 when parameter is valid number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(1.1 + 2.2)).to.closeTo(8.3, 0.01);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
        })
    })


    describe('subTractTen', () => {
        it('should return undefined when parameter is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('20')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        })
        it('should return number minutes 10 when parameter is valid number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(1.1 + 2.2)).to.closeTo(-6.7, 0.01);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        })


    })

    describe('sum', () => {
        it('should return undefined when parameter is not a number', () => {
            expect(mathEnforcer.sum(undefined, 1)).to.equal(undefined);
            expect(mathEnforcer.sum('20', 1)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 1)).to.equal(undefined);
        })

        it('should return undefined when second parameter is not a number', () => {
            expect(mathEnforcer.sum(1, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(1, '20')).to.equal(undefined);
            expect(mathEnforcer.sum(1, null)).to.equal(undefined);
        })


        it('should return the sum of both parameters when both parameters are valid number', () => {
            expect(mathEnforcer.sum(10, 20)).to.equal(30);
            expect(mathEnforcer.sum(1.1 + 2.2, 3.3)).to.closeTo(6.6, 0.01);
            expect(mathEnforcer.sum(-10, -5)).to.equal(-15);
        })


    })




})