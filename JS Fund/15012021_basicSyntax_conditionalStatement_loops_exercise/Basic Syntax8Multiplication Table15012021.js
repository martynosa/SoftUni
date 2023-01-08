//You will receive a number as an input from the console. Print the 10 times table for this number. See the examples below for more information.

function solve(num) {

    for( let i = 1; i <= 10; i++) {
        let sum = i * num;
        console.log(`${num} X ${i} = ${sum}`)

    }

}
solve(2)