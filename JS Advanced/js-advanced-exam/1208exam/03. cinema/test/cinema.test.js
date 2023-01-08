const cinema = require('../cinema');
const { expect, assert } = require('chai');

describe("Tests …", function () {
    describe("showMovies …", function () {
        it("test with 0 length", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        });

        it("test with 0 length", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.')
        });

        it("trivial", function () {
            expect(cinema.showMovies(['ala', 'bala'])).to.equal('ala, bala')
            expect(cinema.showMovies([1, 2])).to.equal('1, 2')
            expect(cinema.showMovies([null, 2])).to.equal(', 2')
            expect(cinema.showMovies([1, null])).to.equal('1, ')
            expect(cinema.showMovies([['hello'], ['world']])).to.equal('hello, world')
        });

    });


    describe("ticketPrice …", function () {
        it("throw err", function () {
            expect(() => cinema.ticketPrice('alabala')).to.throw('Invalid projection type.')
            expect(() => cinema.ticketPrice()).to.throw('Invalid projection type.')
            expect(() => cinema.ticketPrice(1)).to.throw('Invalid projection type.')
            expect(() => cinema.ticketPrice([])).to.throw('Invalid projection type.')
        });

        it("trivial", function () {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });
    });

    describe("swapSeatsInHall …", function () {
        it("trivial", function () {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(20, 1)).to.equal('Successful change of seats in the hall.')
     

        });

        it("err", function () {
            expect(cinema.swapSeatsInHall(1, '2')).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall('1', 2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall('1')).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(2, -1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, 19.9)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(19.9, 2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(21, 2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(null, 2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1, null)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(-1, 21)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall([2], [2])).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(2, 2)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0, 20)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(0,1)).to.equal('Unsuccessful change of seats in the hall.')
            expect(cinema.swapSeatsInHall(1,0)).to.equal('Unsuccessful change of seats in the hall.')
        });
    });


});
