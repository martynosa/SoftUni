
let marto = {
    firstName: `Martin`,
    lastName: `Enev`,
    age: 31
}


marto.favoriteFood = `fries`
marto[`height`] = 190;


let Pesho = {
    iq: 10
}

let person3 = { ...marto, ...Pesho };



console.log(person3);

let number = () => marto.height + Pesho.iq;
console.log(number);













