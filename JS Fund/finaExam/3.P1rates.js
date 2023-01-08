function solve(input) {
    let citiesMap = {};
    while (input[0] !== `Sail`) {
        let [cityName, population, gold] = input.shift().split(`||`);
        population = Number(population);
        gold = Number(gold);

        if (!citiesMap.hasOwnProperty(cityName)) {
            citiesMap[cityName] = { gold, population };
        } else {
            let cityInfo = citiesMap[cityName];
            cityInfo.population += population;
            cityInfo.gold += gold;
        }

    }
    input.shift();

    while (input[0] !== `End`) {
        let [command, ...args] = input.shift().split(`=>`)

        if (command === `Plunder`) {

            let [town, people, gold] = args;
            people = Number(people);
            gold = Number(gold);

            let cityInfo = citiesMap[town];
            cityInfo.population -= people;
            cityInfo.gold -= gold;

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cityInfo.population <= 0 || cityInfo.gold <= 0) {
                delete citiesMap[town];
                console.log(`${town} has been wiped off the map!`);
            }

        } else {

            let [town, gold] = args;
            gold = Number(gold);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                let cityInfo = citiesMap[town];
                cityInfo.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${cityInfo.gold} gold.`);
            }
        }
    }

    let sortedCities = Object.entries(citiesMap)
        .sort(sortCities)

    if (sortedCities.length === 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    } else {
        console.log(`Ahoy, Captain! There are ${sortedCities.length} wealthy settlements to go to:`);
        for (const [cityName, cityInfo] of sortedCities) {
            let { gold, population } = cityInfo;
            console.log(`${cityName} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }

    }


    function sortCities(a, b) {
        let [aCityName, aCityInfo] = a;
        let [bCityName, bCityInfo] = b;
        let result = bCityInfo.gold - aCityInfo.gold;
        if (result === 0) {
            return aCityName.localeCompare(bCityName);
        }
        return result;

    }

}
solve([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])
