
function palindrom(n) {
    
    let digitsArr = splitNum(n);
    let sums = sumsArr(digitsArr)
    let result = `Odd sum = ${sums[1]}, Even sum = ${sums[0]}`;


    function splitNum(num) {
        return num.toString().split('');
    }

    function sumsArr (arr) {
        let evenSum = 0;
        let oddSUm = 0;

        for (let n of arr) {
            n = Number(n);

            if (n % 2 === 0) {
                evenSum += n;
            } else {
                oddSUm += n;
            }           
        }

        return [evenSum, oddSUm];
    }


    return result;

}
let result = palindrom(1000435);
console.log(result);
