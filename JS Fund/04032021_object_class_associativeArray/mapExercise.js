function map(input) {
    let map = new Map();

    for (let element of input) {
        let elementSplit = element.split(` `);
        let product = elementSplit[0];
        let quantity = +elementSplit[1];
        if (!map.has(product)) {
            map.set(product, quantity)
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity + quantity;
            map.set(product, newQuantity);
        }
    }
    console.log(map);

}
map([`tomatoes 10`, `coffee 5`, `coffee 40`]);