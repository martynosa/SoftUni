function solve(input, badWord) {
    //как се цензурира дума/задача
    while( input.includes(badWord)) {
     input = input.replace(badWord, `*`.repeat(badWord.length))
    }
    console.log(input);
}
solve(`I like Java, Java and JavaScript`, `Java`)