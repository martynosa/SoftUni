function solve(text) {
    let js = text.slice(7, 17) //изрязва текста от 7 до 17 index
    let secondJs = text.substring(7, 17) //друг начин за режене на текст
    let thirdJs = text.substr(7, 10) //при този начин втория елемент е броя index след първия
    console.log(js)
    console.log(secondJs)
    console.log(thirdJs)


}
solve(`I like JavaScript and Java and Java Java`)