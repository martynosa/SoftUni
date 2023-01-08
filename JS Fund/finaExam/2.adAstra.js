function solve(input) {
    text = input[0];
    foodReg = /(#|\|)[A-Za-z ]+\1\d{2}\/\d{2}\/\d{2}\1\d+\1/g
    food = text.match(foodReg);

    calories = 0;


    for (const line of food) {

        if (line.includes(`|`)) {
            lineSplit = line.split(`|`)
        } else {
            lineSplit = line.split(`#`)
        }
        calories += Number(lineSplit[3]);
    }


    daysAlive = calories / 2000;
    console.log(`You have food to last you for: ${Math.floor(daysAlive)} days!`);

    for (const line of food) {

        if (line.includes(`|`)) {
            lineSplit = line.split(`|`)
        } else {
            lineSplit = line.split(`#`)
        }
        console.log(`Item: ${lineSplit[1]}, Best before: ${lineSplit[2]}, Nutrition: ${lineSplit[3]}`);

    }

}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);