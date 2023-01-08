function heroes(input) {
    //декларираме празен обект
    let heroes = {};

    //вземаме си броя герои
    let n = Number(input.shift());

    //ще вземе от първия(0) елемент, n елемента
    //кoлкото героя са ни подали с input.shift
    //с forEach(вместо фор цикъл) вземаме всеки ред и го деструктурираме в heroName, hp, mp
    //и ги обръщаме в числа
    input.splice(0, n).forEach(line => {
        let [heroName, hp, mp] = line.split(` `);
        hp = Number(hp);
        mp = Number(mp);

        //добавяме в обекта heroes нов елемент с име heroName
        //който съдържа в себе си hp,mp
        heroes[heroName] = { hp, mp }
    });

    //изпълняване на командите и деструктуриране
    //когато командите имат различен брой елементи, които им се подават
    input.forEach(line => {
        let [command, ...tokens] = line.split(` - `);
        let output;

        if (command !== `End`) {
            if (command === `CastSpell`) {
                output = castSpell(heroes, ...tokens);
            } else if (command === `Recharge`) {
                output = recharge(heroes, ...tokens);
            } else if (command === `TakeDamage`) {
                output = takeDamage(heroes, ...tokens);
            } else if (command === `Heal`) {
                output = heal(heroes, ...tokens);
            }
            console.log(output);
        }
    });

    //сортировка
    let sortedHeroes = Object.entries(heroes)
        .sort(compareHeroes);

    for (const [heroName, heroInfo] of sortedHeroes) {
        //деструктурираме обект с къдреви скоби
        let { hp, mp } = heroInfo;
        console.log(heroName);
        console.log(`  HP: ${hp}`);
        console.log(`  MP: ${mp}`);
    }


    //функция, която сортира по стойност и ако тя е равна,
    //сравнява по азбучен ред
    function compareHeroes(a, b) {
        let [aName, aInfo] = a;
        let [bName, bInfo] = b;

        let byHealthDescending = bInfo.hp - aInfo.hp;

        if (byHealthDescending === 0) {
            return aName.localeCompare(bName);
        }
        return byHealthDescending;

        //алтернативен начин за сортировка
        //return bInfo.hp - aInfo.hp || aName.localeCompare(bName)

        //numbers ascending => a-b;
        //numbers descending => b-a;
        //alphabetical => a.localeCompare(b)
    }





    //отделни функции за всяко действие
    function castSpell(heroes, heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
        let hero = heroes[heroName];

        if (hero.mp >= mpNeeded) {
            hero.mp -= mpNeeded;
            return `${heroName} has successfully cast ${spellName} and now has ${hero.mp} MP!`
        }
        return `${heroName} does not have enough MP to cast ${spellName}!`
    }


    function takeDamage(heroes, heroName, damage, attacker) {
        damage = Number(damage);
        let hero = heroes[heroName];
        hero.hp -= damage;

        if (hero.hp > 0) {
            return `${heroName} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`
        }

        delete heroes[heroName];
        return `${heroName} has been killed by ${attacker}!`
    }

    function recharge(heroes, heroName, amount) {
        amount = Number(amount);
        let hero = heroes[heroName];
        let oldValue = hero.mp;
        // ако маната hero.mp + amount надвиши 200 вземи 200
        hero.mp = Math.min(200, hero.mp + amount);
        return `${heroName} recharged for ${hero.mp - oldValue} MP!`
    }

    function heal(heroes, heroName, amount) {
        amount = Number(amount);
        let hero = heroes[heroName];
        let oldValue = hero.hp;
        // ако маната hero.hp + amount надвиши 100 вземи 100
        hero.hp = Math.min(100, hero.hp + amount);
        return `${heroName} healed for ${hero.hp - oldValue} HP!`

    }


}
heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);