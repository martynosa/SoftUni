function solve(ticketsArray, sortingCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        compareTo(otherTicket, criteria) {
            if (typeof this[criteria] === 'string') {
                return this[criteria].localeCompare(otherTicket[criteria]);
            } else {
                return this[criteria] - otherTicket[criteria];
            }
        }

    }
    let tickets = [];

    for (const el of ticketsArray) {
        let [destination, price, status] = el.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    tickets.sort((a, b) => a.compareTo(b, sortingCriteria));
    return tickets;


}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));