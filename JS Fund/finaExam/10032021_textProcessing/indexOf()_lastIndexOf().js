function solve(text) {
    let currentIndex = text.indexOf(`Java`)

    while (currentIndex !== -1) {
        console.log(currentIndex)
        currentIndex = text.indexOf(`Java`, currentIndex + 1)   //намира позицият от която започва java
                                                                //ако му се подаде втори елемент,
    }                                                           //ще започне от него надясно
}                                                               //lastIndexOf търси от дясно наляво и намира последния index
solve(`I like JavaScript and Java and Java Java`)