function solve(input) {
    let numbers = input.shift() //вземам първия стринг от масива
        .split(` `) // преобразуваме го във нов масив
        .map(Number);// и го превърщаме в числа

    for (let line of input) { //минаваме през всеки елемент от масива
        let inputElements = line.split(` `); // като го разбиваме през интервал в нов масив
        let command = inputElements[0]; // и вземаме првия елемент от новия масив

        if (command === 'end') {    //ако командата
            break;                  // е end break;
        }

        if (command === `swap`) {
            let firstIndex = Number(inputElements[1]);  //  разменяме места 
            let secondIndex = Number(inputElements[2]); //  на два индекса
            let temp = numbers[firstIndex];             //
            numbers[firstIndex] = numbers[secondIndex]; //
            numbers[secondIndex] = temp;                //
        } else if (command === `multiply`) {
            let firstIndex = Number(inputElements[1]);  //  умножаваме
            let secondIndex = Number(inputElements[2]); //  двата елемента
            numbers[firstIndex] *= numbers[secondIndex];//  на зададените индекси

        } else {
            for (let i = 0; i < numbers.length; i++) {
                numbers[i]--;
            }
        }
    }
    console.log(numbers.join(', '));

}
solve([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]
);