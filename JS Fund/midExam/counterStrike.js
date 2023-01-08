function solve(input) {
    /*   if (input.includes(`End of battle`)){
      input.pop();
      } */
    let energy = Number(input.shift());
    let battlesWon = 0;


    for (let eachEnemy of input) {

        if (eachEnemy !== `End of battle`) {

            if (energy > 0) {
                energy -= Number(eachEnemy);
                battlesWon++;
            } else {
                console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
                break;
            }

            if (battlesWon % 3 === 0 && battlesWon !== 0) {
                energy += battlesWon;
            }
        }
    }

    if (energy > 0) {
        console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
    }
}
solve(['100', '10', '10',
    '10', '1', '2',
    '3', '73', '10']
);
solve([`200`, `54`, `14`, `28`, `13`, `End of battle`]);
solve([`100`, `50`, `20`, `5`, `5`, `5`, `5`]);