const rgbToHexColor = require('../rgbToHex');
const { assert, expect } = require('chai');

describe('test the functionallity', () => {

    it('should test for #FF9EAA color = pass ', () => {
        let firstArg = 255;
        let secondArg = 158;
        let thirdArg = 170;

        let expectedResult = '#FF9EAA';

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });



    it('should test the edge range = pass ', () => {
        let firstArg = 255;
        let secondArg = 255;
        let thirdArg = 255;

        let expectedResult = '#FFFFFF';

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });

    it('should test the edge range = pass ', () => {
        let firstArg = 0;
        let secondArg = 0;
        let thirdArg = 0;

        let expectedResult = '#000000';

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });

    it('should test the number of arg = pass ', () => {
        let firstArg = 0;
        let secondArg = 0;


        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg);

        assert.equal(actualResult, expectedResult);

    });

    it('should test the number decimal = pass ', () => {
        let firstArg = 0.5;
        let secondArg = 0;
        let thirdArg = 254.5;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });

    it("should be undefined", function () {
        expect(typeof rgbToHexColor(16, -12, 13)).to.equal("undefined");
    })

    describe("Invalid input -negative number", function () {
        it("should be undefined", function () {
            expect(typeof rgbToHexColor(-16, 12, 13)).to.equal("undefined");
        })
    });

    describe("Invalid input -negative number", function () {
        it("should be undefined", function () {
            expect(typeof rgbToHexColor(16, 12, -13)).to.equal("undefined");
        })
    });




    it('should test the type of arg = pass ', () => {
        let firstArg = '600';
        let secondArg = 0;
        let thirdArg = 0;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });


    it('should test the type of arg = pass ', () => {
        let firstArg = 0;
        let secondArg = true;
        let thirdArg = 0;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });


    it('should test the type of arg = pass ', () => {
        let firstArg = 0;
        let secondArg = 0;
        let thirdArg = ['20'];

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });

    it("no input test", function () {
        expect(rgbToHexColor()).to.be.undefined;
    })

    it("should pad values with zeros", function () {
        expect(rgbToHexColor(012, 013, 014)).to.equal("#0A0B0C");
    });


    it('should test for 4 arg = pass ', () => {
        let firstArg = 255;
        let secondArg = 158;
        let thirdArg = 170;
        let fourthArg = 50;

        let expectedResult = '#FF9EAA';

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg, fourthArg);

        assert.equal(actualResult, expectedResult);

    });



    it('should test the edge range = pass ', () => {
        let firstArg = -255;
        let secondArg = 255;
        let thirdArg = 256;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });

    it('should test the edge range = pass ', () => {
        let firstArg = 256;
        let secondArg = 255;
        let thirdArg = 255;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });

    it('should test the edge range = pass ', () => {
        let firstArg = 255;
        let secondArg = 256;
        let thirdArg = 255;

        let expectedResult = undefined;

        let actualResult = rgbToHexColor(firstArg, secondArg, thirdArg);

        assert.equal(actualResult, expectedResult);

    });








});
