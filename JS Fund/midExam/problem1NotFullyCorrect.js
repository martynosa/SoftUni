function solve(input) {
    let expNeeded = input.shift();
    let expAccumulated = 0;
    let battles = 0;

    for (i = 0; i < input.length; i++) {

        if (expNeeded - expAccumulated < 0) {
            expAccumulated = expAccumulated + input[i];
            notEnoughExp = expNeeded - expAccumulated;
            console.log(`Player was not able to collect the needed experience, ${notEnoughExp.toFixed(2)} more needed`);
        } else {
            if (i % 15 === 0) {
                input[i] = input[i] * 1.05;
            } else if (i % 5 === 0) {
                input[i] = input[i] * 0.90;
            } else if (i % 3 === 0) {
                input[i] = input[i] * 1.15
            }
            battles++;
            expAccumulated = expAccumulated + input[i];

        }

    }
    console.log(`Player successfully collected his needed experience for ${battles} battles.`);

}
solve([`100`, `40`, `50`]);