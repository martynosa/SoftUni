function solve(input) {
    //inputs
    let text = input.shift(); //вземаме текста защото е масив
    let pattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g; //патърн за намиране на думите

    let mirrorWords = [];

    let match = pattern.exec(text);
    let wordPairsCount = 0;

    //main logic
    while (match) {

        let { firstWord, secondWord } = match.groups; //деструтуриране

        let reversedFirstWord = firstWord.split(``).reverse().join(``);
        if (reversedFirstWord === secondWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`)

        }

        wordPairsCount++;
        match = pattern.exec(text);
    }

    //print
    if (wordPairsCount < 1) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${wordPairsCount} word pairs found!`);

    }

    if (mirrorWords.length > 0) {
        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(`, `));

    } else {
        console.log(`No mirror words!`);
    }

}
solve([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]
);
