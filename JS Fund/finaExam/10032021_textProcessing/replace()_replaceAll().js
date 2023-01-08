function solve(input) {
    text = input.replace(/Java/g, `Javascript`) //регулярен израз за да замени /abv/g
                                                //не само първо срещнатия текст, а всички след това
    console.log(text);                          //вместо да ползваме while цикъл
}                                               //може и с replaceAll() - заменя всички срещнати инстанции - НЕ РАБОТИ В JUDGE!
solve(`I like Java! Java Java Java`)