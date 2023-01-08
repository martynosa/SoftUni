function solve(input, step) {
    let filteredArr = input.filter((el, index) =>
        index % step === 0);
    return filteredArr;

}
console.log(solve(
    ['5',
        '20',
        '31',
        '4',
        '20'],
    2
));