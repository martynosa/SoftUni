let people = {
    firstName: 'Martin',
    lastName: 'enev',
    age: 31,
    sayHello() {//функция в обекта, която я извикваме отдолу
        console.log(`My name is ${this.firstName} ${this.lastName}`) //this.променлива -> сочки към променливата по горе извън функцията(без this ще търси променлива зададена отгоре в скобите на самата функция)
    }
}

for (let property in people) { //обикаля през променливите в обекта и ги печата
    console.log(people[property])

};


let keys = Object.keys(people) // обикаля през променливите в обекта и ги печата
    .forEach((property) => {
        console.log(people[property])

    });
console.log(keys);



let values = Object.values(people); // обикаля през променливите в обекта и печата тяхните стойности
console.log(values);



let entries = Object.entries(people); //връща масив от масиви - tuples 
console.log(entries);

//forin за масиви и обекти
//forof за масиви само