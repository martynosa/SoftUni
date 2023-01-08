function furniture(input) {

    product = input.shift();
    regProduct = /[A-Za-z]+/g;
    regPriceAndCount = /([\d]+(\.[\d]+)?)/g;
    boughtFurniture = [];
    moneySpent = 0;

    while (product !== `Purchase`) {
        productName = product.match(regProduct);

        if (productName[0] !== `Invalid`) {
            boughtFurniture.push(...productName);
            productPriceAndCount = product.match(regPriceAndCount);
            moneySpent = moneySpent + (productPriceAndCount[0] * productPriceAndCount[1]);
        }

        product = input.shift();
    }
    console.log(`Bought furniture:`);
    for (const item of boughtFurniture) {
        console.log(item);
    }
    console.log(`Total money spend: ${moneySpent.toFixed(2)}`);



}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
);