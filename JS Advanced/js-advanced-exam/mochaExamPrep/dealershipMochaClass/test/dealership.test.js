let dealership = require('../dealership');
const { expect } = require('chai');

describe("Tests …", () => {
    describe("newCarCost", () => {

        it("wrong inputs", () => {
            expect(dealership.newCarCost(undefined, 100)).to.equal(100);
            expect(dealership.newCarCost('Audi A4 B8', undefined)).to.be.NaN;
            expect(dealership.newCarCost(undefined, '100')).to.equal(`100`);
            expect(dealership.newCarCost('Audi A4 B8', '100')).to.equal(-14900);
            expect(dealership.newCarCost(100)).to.equal(undefined);
            expect(dealership.newCarCost('bmw e46', 100)).to.equal(100);
            expect(dealership.newCarCost('Audi A4 B8', -100)).to.equal(-15100);
            expect(dealership.newCarCost('Audi A4 B8', 100.1)).to.equal(-14899.9);

            expect(dealership.newCarCost('Audi A4 B8', 16000)).to.equal(1000);

        });
    });

    describe("carEquipment", () => {

        it("trivial", () => {
            let extrasArr = ['a', 'b', 'c'];
            let indexArr = [0, 1, 2]
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['a', 'b', 'c']);

        });

        it("wrong input extrasArr", () => {
            let extrasArr = [];
            let indexArr = [0,]
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal([undefined]);
        });

        it("wrong input indexArr", () => {
            let extrasArr = ['a'];
            let indexArr = [2]
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal([undefined]);

        });

        it("wrong empty", () => {
            let extrasArr = [];
            let indexArr = []
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal([]);

        });

        it("wrong empty", () => {
            let extrasArr = ['a', 'b'];
            let indexArr = [0, 1, 2];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['a', 'b', undefined]);

        });

        it("wrong empty", () => {
            let extrasArr = ['a', 'b', 'c'];
            let indexArr = [0, 1];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal(['a', 'b']);

        });

        it("wrong empty", () => {
            let extrasArr = ['a', 'b', 'c'];
            let indexArr = [-1];
            expect(dealership.carEquipment(extrasArr, indexArr)).to.deep.equal([undefined]);

        });





    });

    describe('eco', () => {
        it('wrong input', () => {
            expect(dealership.euroCategory(true)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(undefined)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory('2')).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(-1)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(0)).to.equal('Your euro category is low, so there is no discount from the final price!');

            //trivial
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');

            //trivial
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`);

            //edge
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`);

            //edge
            expect(dealership.euroCategory(4.1)).to.equal(`We have added 5% discount to the final price: 14250.`);
            expect(dealership.euroCategory(3.99)).to.equal('Your euro category is low, so there is no discount from the final price!');




        });
    });





});