//Arrays

function demo() {

    let arr = [1, 2, 3];
    let firstElement = arr[0]; // assigns the first value in the array/ first position is 0 in arrays

    console.log(arr.length); //arr.length - takes the length of the array


}
demo()

function demo2() {

    let arr2 = ['Peter', 'Ana', 'ivan', 'Tim'];

    arr2.push = 'Maria'; // Adds 'Maria' on last postion in the array

    let lastIndex = arr2.length - 1; // takes the last position in array
    arr2[lastIndex] = 'Maria'; // assigns 'Maria' on the lastIndex

    console.log(arr2);


}
demo2()