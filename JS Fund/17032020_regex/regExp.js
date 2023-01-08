function regExp() {

    let inputText = 'Today is 2015-05-11';
    let regex = /\d{4}-\d{2}-\d{2}/g;

    let containsValidDate = regex.test(inputText);
    console.log(containsValidDate); // true

}
regExp();
