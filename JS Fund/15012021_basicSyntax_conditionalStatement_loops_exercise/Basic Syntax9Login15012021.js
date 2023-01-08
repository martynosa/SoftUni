//You will be given a string representing a username. The password will be that username 
//reversed. Until you receive the correct password print on the console "Incorrect password. 
//Try again.". When you receive the correct password print "User {username} logged in." 
//However on the fourth try if the password is still not correct print "User {username} 
//blocked!" and end the program. The input comes as an array of strings.

function solve(arr) {

    //Записва първата стойност от масива в username в случая 'Acer' и вади елемента от масива
    let username = arr.shift() 
    //Връща сплитнат масив с интервал межди буквите
    let password = username.split('').reverse().join('')
    let counter = 0
    for (let i = 0; i < arr.length; i++) { //цикъла се завърта докато не достигне дължината на масива

        if ( i >= 3) {
            console.log(`User ${username} blocked!`)
            break;
        }

        if (arr[i] === password) {
            console.log(`User ${username} logged in.`)
        } else {
            console.log('Incorrect password. Try again.')
        }
    } 

}
solve(['momo','omom'])