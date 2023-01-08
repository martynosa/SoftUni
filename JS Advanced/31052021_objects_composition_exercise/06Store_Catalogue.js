function solve(input) {
    let result = {};


    //How to populate an obj
    for (let el of input) {
        let [name, price] = el.split(` : `);
        price = Number(price);
        if (!result.hasOwnProperty(name[0])) {
            result[name[0]] = {};
        }
        result[name[0]][name] = price;

    }

    //how to sort an obj
    let finalResult = [];
    let sortedResult = Object.keys(result).sort((a, b) => a.localeCompare(b));


    for (const key of sortedResult) {
        let products = Object.entries(result[key])
            .sort((a, b) => a[0].localeCompare(b[0]));
        finalResult.push(key);
        let productsString = products
            .map(x => `  ${x[0]}: ${x[1]}`)
            .join('\n')
        finalResult.push(productsString);
    }



    return finalResult.join(`\n`)

}
console.log(solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
));