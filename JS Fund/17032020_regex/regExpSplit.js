function split() {

    let text = '1   2 3      4';
    let regex = /\s+/g;
    let result = text.split(regex);
    console.log(result) // ['1', '2', '3', '4'];

}
split();