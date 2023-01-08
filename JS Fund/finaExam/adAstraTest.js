function solve(input) {

    let regex = /(\||\#)([A-Za-z\ ]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g



    let string = input[0];
    let sumCalories = 0;
    let foods = [];
    while ((isValid = regex.exec(string)) !== null) {
        sumCalories += Number(isValid[4]);
        let food = [isValid[2], isValid[3], isValid[4]];
        foods.push(food);
    }
    console.log(`You have food to last you for: ${Math.trunc(sumCalories / 2000)} days!`);
    foods.forEach(food => console.log(`Item: ${food[0]}, Best before: ${food[1]}, Nutrition: ${food[2]}`))
}
solve([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);