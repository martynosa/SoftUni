function solve(arr, delimiter) {
    let joinedArr = arr.join(delimiter);
    return joinedArr;

}
console.log(solve(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'));