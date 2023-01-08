class Restaurant {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    //array of strings - "{productName} {productQuantity} {productTotalPrice}"
    loadProducts(productArr) {
        let result = '';


        for (const product of productArr) {
            let [name, quantity, price] = product.split(' ');

            if (this.budget >= price) {

                //check if it exists
                if (this.stockProducts.hasOwnProperty(name)) {
                    this.stockProducts[name] = this.stockProducts[name] + quantity;
                } else {
                    this.stockProducts[name] = quantity;
                }

                //deduct price
                this.budget = this.budget - price;
                //result
                result = `Successfully loaded ${quantity} ${name}`
                this.history.push(result)
            } else {
                result = `There was not enough money to load ${quantity} ${name}`
                this.history.push(result)
            }
            return this.history.join('\n')
        }
    }

    addToMenu(meal, productsArr, price) {

        let result = `The ${meal} is already in the our menu, try something different.`

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = {};
            this.menu[meal][`products`] = productsArr.split(' ');
            this.menu[meal][`price`] = price;

            let menuLength = Object.keys(this.menu);

            if (menuLength.length === 1) {
                result = `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                result = `Great idea! Now with the ${meal} we have ${menuLength.length} meals in the menu, other ideas?`
            }


        }

        return result;

    }

    showTheMenu() {
        let result = '';
        for (const meal in this.menu) {
            result += `${meal} - $ {meal price}`;
        }

        let menuLenght = Object.keys(this.menu);

        if (menuLenght.length === 0) {
            result = `Our menu is not ready yet, please come later...`;
        }



        return result;
    }


    makeTheOrder(meal) {
        let result = `Your order (${meal}) will be completed in the next 30 minutes and will cost you.`
        if (!this.menu.hasOwnProperty(meal)) {
            result = `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        return result;

    }







}
let restaurant = new Restaurant(50);
restaurant.loadProducts(["Banana 10 5", "Strawberries 50 30", "Honey 5 50"]);
console.log(restaurant.addToMenu('kifte', 'sol 5', 15));
console.log(restaurant.addToMenu('bob', 'sol 5', 15));
console.log(restaurant.showTheMenu());