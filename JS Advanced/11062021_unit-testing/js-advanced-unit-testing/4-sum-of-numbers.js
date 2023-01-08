function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

let result = sum([-1, -2, -3]);

module.exports = sum;