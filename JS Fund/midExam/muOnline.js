function muOnline(input) {
    let dungeons = input.split(`|`); //разделяме стринга през | и го записваме като нов масив в променливата
    let health = 100;
    let coins = 0;
    let isAlive = true;
    let currentDungeon = 0;

    for (const dungeon of dungeons) { //циклим през dungeons като започваме от първия аргумент 'rat 10'
        let dungeonSplit = dungeon.split(` `);
        let command = dungeonSplit[0];
        let value = Number(dungeonSplit[1]);
        currentDungeon++;

        if (command === `potion`) {
            //health = Math.min(100, health + value);//или 100 или ако health+value е по-малко от 100 ще върне 100
            let healedwith = value;
            if (health + value > 100) { //с тоя If проверяваме сколко сме се хилнъли като макс е 100
                healedwith = 100 - health;
                health = 100;

            } else {
                health += value;

            }
            console.log(`You healed for ${healedwith} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === `chest`) {
            coins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;

            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${currentDungeon}`);
                isAlive = false;
                break; //ако умрем брейкваме цикъла;
            }
            console.log(`You slayed ${command}.`);
        }
    }

    if (isAlive) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');