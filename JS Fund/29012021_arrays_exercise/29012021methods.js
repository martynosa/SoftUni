
function demo() {

let arr = ['Peter', 'Ana', 'Ivan', 'Tim', 'Maria'];

let isMaria = arr.includes('Maria', 2); // is 'Maria' included in the array from postion 2(included) onwards

console.log(isMaria);

console.log(arr.toString()); // converts the array into string
let str = arr.join(', '); // converts the array into string and separates elements with whatever u input in the brackets
console.log(str.split(', ')) // opposite of join converts the str into array and removes the separator u if u input one in the bracket
}
demo();