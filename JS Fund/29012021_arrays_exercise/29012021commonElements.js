
// Обхожда масивите, сравнява и отпечатва само стойностите, които са еднакви
function commElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        for (let i2 = 0; i2 < secondArr.length; i2++) {

            if (firstArr[i] === secondArr[i2]) {
                console.log(firstArr[i]);

            }

        }

    }
}
commElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);