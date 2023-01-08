function solve(input) {
    let myMap = new Map();
    input.split(` `).forEach(element => {
        element = element.toLowerCase();  //прави всичко с малки букви(при case insensitive)

        if (!myMap.has(element)) {                    //попълва мапа
            myMap.set(element, 0)                     //само със стойностите
        }                                             //който ги няма
        myMap.set(element, myMap.get(element) + 1);   //и ако го има увеличава броя
    });

    return Array.from(myMap.keys()) //връща масив от мапа
        .filter(x => myMap.get(x) % 2 !== 0) //филтрира само нечетните
        .join(` `);


}
console.log(solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'));
