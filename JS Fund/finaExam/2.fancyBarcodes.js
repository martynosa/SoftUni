function barcodes(input) {
    input.shift();
    //не може да се добавят променливи
    let regex = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;
    //може да се добавят променливи
    let secondRegex = new RegExp(`(@#{1,})([A-z][A-Za-z\d]{4,}[A-Z])(@#{1,})`, `g`);

    input.forEach(line => {
        if (regex.test(line)) {

            let tokens = regex.exec(line);
            let barcode = tokens[2];
            let numbers = [...barcode]
                .filter(symbol => /\d/.test(symbol))
                .join(``);

            //тернарен оператор ако стринга е празен запази 00 ако не numbers
            let productGroup = numbers === ``
                ? `00`
                : numbers;

            console.log(`Product group: ${productGroup}`);

        } else {
            console.log(`Invalid barcode`);
        }
    });


}
barcodes(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##']);