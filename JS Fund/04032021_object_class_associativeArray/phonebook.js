function phonebook(input) {

    let phonebook = {};

    for (let property of input) {
        let propertySplit = property.split(` `);
        let name = propertySplit[0];
        let phoneNumber = propertySplit[1];
        phonebook[name] = phoneNumber;
    }
   

    for (let keys in phonebook) {
        console.log(`Name -> ${keys}, Number -> ${phonebook[keys]} `);
    }


}
phonebook([`Marto 0877066008`, `Milena 0888888888`]);