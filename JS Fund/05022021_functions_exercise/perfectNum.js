
function perfNum(n) {

    sum = 0;

    for (i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {

            if (n / i == i) {
                sum += i;
            } else {
                sum += i;
                sum = sum + (n / i);
            }
        }
    }
    //console.log(sum-n);

    if (sum - n === n) {
        return `We have a perfect number!`
    } else {
        return ` It's not so perfect.`
    }

}
console.log(perfNum(28));