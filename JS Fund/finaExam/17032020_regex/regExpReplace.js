function replace() {

    let text = 'Peter: 123 Mark: 456';
    let replacement = '999';
    let regex = /\d{3}/g;
    let result = text.replace(regex, replacement);
    // Peter: 999 Mark: 999
    console.log(result);
}
replace();