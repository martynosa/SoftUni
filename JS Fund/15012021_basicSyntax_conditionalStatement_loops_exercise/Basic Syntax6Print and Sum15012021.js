
//Write a function to display numbers from given start to given end and their sum. The input comes as two number parameters.
//Basic cycle
// '/n' ---> print on new line

function solve(startNum, endNum) {
    let line =  ''
    let sum = 0
    for(let i = startNum; i <= endNum; i++ ) { //cycles until startNum equals endNum
        line += i + ' ' //line = line + i ---> '' + 5 ---> '5'//Към стринг добавяме число и това няма да ги събере, а залепи като текст
        sum += i
    }
    console.log(line)
    console.log('Sum:', sum)


}

solve(5, 10)