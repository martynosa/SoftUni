function solve(input) {
    if (input.includes(`End of battle`)) {
        input.pop();
    }
    let energy = Number(input.shift());
    let enemiesArr = input.map(Number);
    let battlesWon = 0;

    for (let eachEnemy of enemiesArr) {


        if (energy < eachEnemy) {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
            return;
        } else {
            energy -= eachEnemy;
            battlesWon++;
        }

        if (battlesWon % 3 === 0 && battlesWon !== 0) {
            energy += battlesWon;
        }
    }

    console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
}
/* solve([`100`, `50`, `50`]);
solve(['100', '10', '10', '10', '1', '2', '3', '73', '10']); */
solve([`200`, `54`, `14`, `150`, `End of battle`]);
