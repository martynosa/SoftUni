function solve(checkID, withdrawnSum) {
    let customers = [
        {
            firstName: 'martin',
            lastName: 'enev',
            id: 1,
            sum: 100,
            transactions: []
        },
        {
            firstName: 'milena',
            lastName: 'eneva',
            id: 2,
            sum: 100,
            transactions: []
        },
        {
            firstName: 'rumen',
            lastName: 'enev',
            id: 3,
            sum: 100,
            transactions: []

        }
    ];
    result = 'no match';
    for (const customer of customers) {
        if (customer.id === checkID) {
            customer.sum -= withdrawnSum;
            result = `left ${customer.sum}, withdrawn ${withdrawnSum}`
            customer.transactions.push(result);
            console.log(`past transactions: ${customer.transactions.join('\n')}`);

        }


    }

    return result;


}






