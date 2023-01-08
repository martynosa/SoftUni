function solve(text) {
    let words = text.split(/\W+/g);
    let filteredWord = [];
    for (const el of words) {
        if (el !== '') {
            filteredWord.push(el.toUpperCase())
        }
    }
    console.log(filteredWord.join(`, `));

}
solve('Hi, how are you?');