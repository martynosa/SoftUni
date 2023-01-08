function solve(stock, order) {

    let shop = {};

    for (let i = 0; i < stock.length; i += 2) { //минава през масива само на четни позиции
        const element = stock[i];
        shop[element] = Number(stock[i + 1]);
    }

    for (let i = 0; i < order.length; i += 2) {
        const element = order[i];
        if (shop.hasOwnProperty(element)) { //проверява дали това пропърти съществува 
            shop[element] += Number(order[i + 1]);
        } else {
            shop[element] = Number(order[i + 1]);
        }

    }

    for (const key in shop) {
        console.log(`${key} -> ${shop[key]}`)
    }


}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);