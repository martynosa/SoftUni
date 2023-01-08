function solve(input) {
    let result = {};

    for (let index = 0; index < input.length; index += 2) {
        let itemName = input[index];
        let calories = input[index + 1];
        result[itemName] = Number(calories);
    }

    return result
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
