function palindrome(arr) {

    //проверява дали е числото е палиндром и връща true or false
    function isPalindrome(n) {
        let reversedN = n.toString().split('').reverse().join('');
        return Number(reversedN) === n ? true : false;
    }


    for (const n of arr) {
        console.log(isPalindrome(n));
    }

}
let result = palindrome([123, 323, 421, 121]);
console.log(result);