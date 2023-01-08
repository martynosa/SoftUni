function solve(input) {
    let numbers = input.split(` `) // сплитваме стринга в масив през интервал
        .map(Number);                  // и го обръщаме в числа       



    let avg = numbers.reduce((previous, current) => previous + current, 0) / numbers.length;
    //събираме всичко числа от масива в една стойност с reduce

    let filtered = numbers.filter((num) => num > avg); // филтрира числата по големи от средната стойност
    let sorted = filtered.sort((a, b) => b - a);    // сортираме ги в низходящ ред
    let five = sorted.slice(0, 5);



    if (five.length === 0) {
        console.log(`No`);
    } else {
        console.log(five.join(` `));
    }

}
solve('10 20 30 40 50');
