function solve(arr) {
    let assocArr = {}

    for (let i = 0; i < arr.length; i += 2) {
        let metal = arr[i]
        let quantity = +arr[i + 1]
        if (!assocArr.hasOwnProperty(metal))
            assocArr[metal] = quantity
        else
            assocArr[metal] += quantity
    }

    Object.keys(assocArr).forEach(key => console.log(`${key} -> ${assocArr[key]}`))
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
