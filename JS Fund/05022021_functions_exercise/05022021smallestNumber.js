

function smallestNum(x, y, z) {

    let smallestNumber = Number.MAX_SAFE_INTEGER;

    for (const n of arguments) { //съдържа всички подадени аргументи
    
        getSmaller(n)
    }

    function getSmaller(n) {
        if (n < smallestNumber) {
            smallestNumber = n;
        }
    }

    return smallestNumber;
    
}
let result = smallestNum(1, 2, 3);
console.log(result);