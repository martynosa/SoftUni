


//Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. Return the result like examples below:

function solve(year) {

    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        console.log('yes')
    } else {
        console.log('no')
    }
}
solve(4)


