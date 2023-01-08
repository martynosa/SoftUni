function solve(city) {
    let properties = Object.keys(city);
    
    for (const property of properties) {
        console.log(`${property} -> ${city[property ]}`)
    }


}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});

function solve2(city) { //alternative way to solve
    let tuples = Object.entries(city);
    
    for (const [key, value] of tuples) { // destructioring of array
        console.log(`${key} -> ${value}`)
    }


}

solve2({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});