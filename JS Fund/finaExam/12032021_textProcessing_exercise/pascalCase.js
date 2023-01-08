function solve(str) {
    let result = [];
    let upperIndex = 0;

    for (i = 1; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            let word = str.substring(upperIndex, i);
            result.push(word);
            upperIndex = i;
        }
    }
    result.push(str.substring(upperIndex)); //пушваме последната дума
    console.log(result.join(`, `));

}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');