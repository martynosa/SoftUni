function solve([firstStr, secondStr, word]) {
    //A, E, I, O, and U
    let pass = firstStr + secondStr;
    counter = 0;
    base = word.length;
    let isVowel = (x) => `aeiou`.indexOf(x.toLowerCase()) !== -1;
    for (let i = 0; i < pass.length; i++) {
        if (isVowel(pass[i])) {
            pass = pass.substring(0, i) + word[counter % base].toUpperCase() + pass.substring(i + 1);
            counter++;
        }

    }

    console.log(`Your generated password is ${pass.split(``).reverse().join(``)}`);

}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);
