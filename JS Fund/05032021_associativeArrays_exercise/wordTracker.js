function solve(input) {
    let occurances = {};
    input.shift().split(` `).forEach(word => {
        occurances[word] = 0;
    });


    input.forEach(forEveryWord => {
        if (occurances.hasOwnProperty(forEveryWord)) {
            occurances[forEveryWord]++;
        }
    })

    let sortedArr = Object.keys(occurances)
        .sort((a, b) => occurances[b] - occurances[a])
        .map(word => `${word} - ${occurances[word]}`)
        .join(`\n`)
    console.log(sortedArr);

}
solve([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);