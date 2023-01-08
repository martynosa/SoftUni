//Ternary operator with leap year check

function solve(year) {

    let isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0; //boolean check

    let result = isLeapYear ? 'yes' : 'no' //if IsLeapYear is true result = yes if false result = no
    //isLeapYear ? console.log('yes') : console.log('no') // if isLeapYear true print yes if falso print no
    
    console.log(result)
}
solve(1985)
