function solve(input) {
    let clientType = input.pop();
    let totalPrice = 0;
    let tax = 0;
    let totalPriceWithTax = 0;
    let totalPriceWithTaxDiscount = 0;
    let positivePricesList = [];

    for (let eachPriceCheck of input) {
        if (eachPriceCheck > 0) {
            positivePricesList.push(Number(eachPriceCheck));

        } else if (eachPriceCheck === 0) {
            console.log(`Invalid Order!`);
        } else {
            console.log(`Invalid price!`);
        }
    }

    for (let eachPrice of positivePricesList) {
        totalPrice = totalPrice + eachPrice;


    }

    tax = totalPrice * 0.20;

    if (clientType === `special`) {
        totalPriceWithTax = totalPrice * 1.20;
        totalPriceWithTaxDiscount = totalPriceWithTax * 0.90;
    } else {
        totalPriceWithTaxDiscount = totalPrice * 1.20;
    }

    if (totalPriceWithTaxDiscount <= 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${totalPrice.toFixed(2)}$
        Taxes: ${tax.toFixed(2)}$
        -----------
        Total price: ${totalPriceWithTaxDiscount.toFixed(2)}$`
        );
    }



}
solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);