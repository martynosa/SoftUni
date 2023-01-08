function solve(word, template) {

    template = template.toLowerCase().split(` `);

    if (template.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
solve('java',
    'JavaScript is the best programming language');