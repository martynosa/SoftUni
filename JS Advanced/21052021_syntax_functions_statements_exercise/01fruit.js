function solve(fruit, gram, pricePerKG) {
    let weightInKg = gram / 1000;
    let money = weightInKg * pricePerKG;
    return `I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`

}
console.log(solve('orange', 2500, 1.80));