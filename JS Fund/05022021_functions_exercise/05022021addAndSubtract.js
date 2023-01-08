

function addAndSubtract(x, y,z) {

    function add( a, b) {
        return a + b;
    }

    function sub(a, b) {
        return a - b;
    }


    return sub(add(x, y), z);

}
let result = addAndSubtract(23, 6, 10);
console.log(result);
