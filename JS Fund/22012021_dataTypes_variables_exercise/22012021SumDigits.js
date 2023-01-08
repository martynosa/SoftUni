function solve(n) {
    let str = n.toString() // converts n into string
    let sum = 0

    for(let i = 0; i < str.length; i++) {
       sum += Number(str[i])
    }
    console.log(sum)


}

solve(245678)