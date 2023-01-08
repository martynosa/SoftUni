// взема n наброй елементи от началото на масива и ги добавя в края
function solve(arr, n) {

    for (i = 0; i < n; i++) {
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(' '));

}
solve([51, 47, 32, 61, 23], 2);