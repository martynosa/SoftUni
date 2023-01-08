function solve(){
    hours = `5`.padStart(2, `0`);       // добавя втория елемент в скобите докато символите станат 2(Първи елемент)
    minutes = `56`.padStart(2, `0`);;   // ако са вече 2 или повече не прави нищо
    seconds = `3`.padStart(2, `0`);;    // има и padEnd, само че той добавя втория елемент след запетаята в края

    console.log(`${hours}:${minutes}:${seconds}`)

}
solve();
