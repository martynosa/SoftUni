

function maps() {
    let person = new Map();

    person.set(`name`, `Ivo`);
    person.set(`age`, 27);
    person.set(`gender`, `male`);

    if (person.has(`carColor`)) {
        console.log(person.get(`carColor`));
    } else {
        person.set(`carColor`, `red`);
    }

    console.log(person);

    //трием с person.delete(`name`);
    //колко двойки има person.size();
    //изчистваме всички двойки от мапа person.clear();
}
maps();