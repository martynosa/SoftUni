function emoji(input) {


    let regex = /((::)|(\*\*))[A-Z][a-z]{2,}\1/g;
    let regexDigits = /\d/g;

    let threshold = input[0].match(regexDigits).map(Number).reduce((a, b) => a * b, 1);
    console.log(`Cool threshold: ${threshold}`);
    let emojies = input[0].match(regex);
    console.log(`${emojies.length} emojis found in the text. The cool ones are:`);

    let coolemoji = emojies.map(x => {
        let coolness = x.split(``)
            .splice(2, x.length - 4)
            .map(char => char.charCodeAt())
            .reduce((a, b) => a + b, 0);

        if (coolness > threshold) {
            console.log(x);
        }

    });

}
emoji([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]
);