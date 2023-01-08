//Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
//cycle that creates pyramid
function solve(num) {

    for ( let i = 1; i <=num; i++) {
        let line = ''
        for (let j = 1; j <= i; j++) {
            line += i +' '

        }
        console.log(line)

     }

}
solve(5)

//another variant using repeat()

function solve(num) {

    for ( let i = 1; i <=num; i++) {
        let line = i + ' '

        console.log(line.repeat(i)) //repeat()

     }

}
solve(5)