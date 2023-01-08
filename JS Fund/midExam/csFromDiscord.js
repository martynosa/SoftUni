function solve(array) {
    let initialEn = Number(array.shift());
    let wonBattles = 0;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element !== 'End of battle') {
            if (initialEn - element < 0) {
                console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEn} energy`)
                break;
            } else {
                initialEn -= Number(element);
                wonBattles ++

                if (wonBattles % 3 === 0) {
                    initialEn += wonBattles
                }
            }
        } else {
            console.log(`Won battles: ${wonBattles}. Energy left: ${initialEn}`)
        }
    }
}
solve([`100`, `50`, `50`]);
