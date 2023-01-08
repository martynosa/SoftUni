function solve(arr) {

    let currNum = 1;
    let result = []

    for (const comm of arr) {
        if (comm === `add`) {
            result.push(currNum)
        } else {
            result.pop()
        }
        currNum++
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        for (const number of result) {
            console.log(number);
        }
    }
}
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']));