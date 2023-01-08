
//let person = { name: 'Martin', lastName: 'Enev', age: 23 };// -> обект



//person.grades = [6, 6, 6]; // add properties to object
//person['grades'] = [4,4,4]; - alternative way to add objects
//могат да се добавят променили в обект, които са били вече декларирани извън него



let people = {
    firstName: 'Martin',
    lastName: 'enev',
    age: 31,
    sayHello() {//функция в обекта, която я извикваме отдолу
        console.log(`My name is ${this.firstName} ${this.lastName}`) //this.променлива -> сочки към променливата по горе извън функцията(без this ще търси променлива зададена отгоре в скобите на самата функция)
    }
}
people.sayHello();
