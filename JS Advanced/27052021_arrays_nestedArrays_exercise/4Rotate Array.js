function solve(arr, rotations) {
    let realRotations = rotations % arr.length;

    for (let index = 0; index < realRotations; index++) {
        let el = arr.pop();
        arr.unshift(el);

    }

    return arr.join(` `);

  


}
console.log(solve(
    ['1',
        '2',
        '3',
        '4'],
    2
));