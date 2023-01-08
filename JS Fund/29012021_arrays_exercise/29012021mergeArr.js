// обхожда първия масив и ако индекса е четен събира числото с числото на същия индекс от другия масив и прави 3ти масив 
function solve(firstArr, secondArr) {

    let thirdArr = [];

    for ( i = 0; i < firstArr.length; i++) {

        if ( i % 2 === 0) {
            let sum = Number(firstArr[i]) + Number(secondArr[i]); // превърща стринга в число за да може да ги събере
            thirdArr.push(sum);

        } else {
            let concat = firstArr[i] + secondArr[i];
            thirdArr.push(concat);
        }
    }
    console.log(thirdArr.join(' - '))

}
solve(['5', '15','23', '56', '35'],
    ['17', '22', '87', '36', '11']);