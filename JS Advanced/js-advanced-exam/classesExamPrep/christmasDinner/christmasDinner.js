class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }

        this._budget = value;
    }
    //array
    shopping(product) {
        if (product[1] > this._budget) {
            throw new Error("Not enough money to buy this product");
        }
        this.products.push(product[0]);
        this.budget = this.budget - product[1];
        return `You have successfully bought ${product[0]}!`

    }
    //object
    recipes(recipe) {
        let productsList = recipe.productsList;
        let validProducts = productsList.every(product => this.products.includes(product));

        if (!validProducts) {
            throw new Error("We do not have this product");
        }

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`

    }

    inviteGuests(name, dish) {
        let dishesArr = [];
        for (const eachDish of this.dishes) {
            let eachDishValues = Object.values(eachDish)[0];
            dishesArr.push(eachDishValues);
        }

        if (!dishesArr.includes(dish)) {
            throw new Error("We do not have this dish")
        }

        if (this.guests.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
        }

        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;

    }

    // showAttendance() {

    //     for (const key in this.guests) {

    //         let value = this.guests[key];
    //         console.log(`${key} will eat ${value}, which consists of {products}`);

    //     }

    // }

    showAttendance() {
        let result = []
        Object.entries(this.guests).forEach(([guest, dish]) => {
            result.push(`${guest} will eat ${dish}, which consists of ${this.dishes.find(d => d.recipeName === dish).productsList.join(', ')}`)
        })
        return result.join('\n')
    }


}
let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());




