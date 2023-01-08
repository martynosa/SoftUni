
//върти цикъл и изважда от всяка стойност неговата индекс позиция и я презаписва в масива
function addSubtract(array) {

    let originalSum = 0;

    for (const num of array) { // обхожда масива и събира всички стойности в него в една променлива
        originalSum += num;
        
    }

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            array[i] = array[i] + i;
        } else {
            array[i] -= i;
        }

    }

    let newSum = 0;
    for (const num2 of array) {
        newSum += num2;
        
    }

    console.log(array);
    console.log(originalSum);
    console.log(newSum);

}
addSubtract([5, 15, 23, 56, 35]);
