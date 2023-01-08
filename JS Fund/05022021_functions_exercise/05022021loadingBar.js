
function loadingBar(n) {
   
    
    function fullRow(n) {
        return `%`.repeat(n/10);
    }

    function emptyRow(n) {
        return `.`.repeat(10 - n/10);
    }

    if( n === 100) {
        result = `100% Complete!\n` + `[${fullRow(n)}]`;
    } else {
        result = `${n}% [${fullRow(n)}${emptyRow(n)}]\nStill loading...`;
    }
   
    return result;
    
}
loadingBar(20);
console.log(result);