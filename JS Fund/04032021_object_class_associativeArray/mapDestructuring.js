
function map() {
    let person = new Map();

    person.set(`name`, `Ivo`);
    person.set(`age`, 27);
    person.set(`gender`, `male`);

    if (person.has(`carColor`)) {
        console.log(person.get(`carColor`));
    } else {
        person.set(`carColor`, `red`);
    }



    let arr = Array.from(person); //връща масив от масиви
    let arr2 = [... person]; //връща масив от масиви spread

    
    console.log(arr2);


}
map();