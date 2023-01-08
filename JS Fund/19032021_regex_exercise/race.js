function race(input) {
    let racers = {};

    //попълваме обект с имената и стойности на 0
    input.shift().split(`, `).forEach(name => {
        racers[name] = 0;
    });

    for (const line of input) {
        let regName = /[A-Za-z]/g;
        let regD = /[\d]/g;

        let name = line.match(regName).join(``);

        //проверяваме дали съществува такъв key и 
        //ако има събираме км в него като стойност
        if (racers.hasOwnProperty(name)) {
            let km = line.match(regD).map(Number).reduce((a, b) => a + b);
            racers[name] += km;
        }

    }
    //сортираме обекта по стойностите в ключа
    let sorted = Object.keys(racers).sort((a, b) => racers[b] - racers[a]);

    console.log(`1st place: ${sorted[0]}`);
    console.log(`2nd place: ${sorted[1]}`);
    console.log(`3rd place: ${sorted[2]}`);

}
race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);


