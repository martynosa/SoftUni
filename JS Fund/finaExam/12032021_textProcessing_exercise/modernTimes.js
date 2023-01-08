function modernTimes(input) {

    let words = input.split(` `);

    for (const word of words) {
        if (word.startsWith(`#`) && word.length > 1 && isOnlyLetters(word.substring(1))) {
            console.log(word.substring(1));//печата думата от 2рия символ
        }
    }

    function isOnlyLetters(wordToCheck) {
        let isLetter = true;

        for (const char of wordToCheck) {
            let code = char.charCodeAt(); //връща ascii кода на буквата
            if (code < 65 || code > 90 && code < 97 || code > 122) {
                isLetter = false;
                break;
            }

        }
        return isLetter;
    }


}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');