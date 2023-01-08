class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }
    // customer = {firstName, lastName, personalId};
    newCustomer(customer) {
        if (this.allCustomers.some(x => x.firstName === customer.firstName
            && x.lastName === customer.lastName && x.personalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this.customerExists(personalId);

        if (customer['totalMoney'] === undefined) {
            customer['totalMoney'] = 0;
            customer['transactionInfo'] = [];
        }

        customer.totalMoney += amount;

        let depositObj = {
            id: customer.transactionInfo.length + 1,
            firstName: `${customer.firstName}`,
            lastName: `${customer.lastName}`,
            type: 'deposit',
            amount,
        }
        customer.transactionInfo.push(depositObj);
        return `${customer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        let customer = this.customerExists(personalId);

        if (customer['totalMoney'] === undefined) {
            customer['totalMoney'] = 0;
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        let withdrawalObj = {
            id: customer.transactionInfo.length + 1,
            firstName: `${customer.firstName}`,
            lastName: `${customer.lastName}`,
            type: 'withdraw',
            amount,
        }
        customer.transactionInfo.push(withdrawalObj);
        return `${customer.totalMoney}$`
    }

    customerInfo(personalId) {
        let customer = this.customerExists(personalId);

        customer.transactionInfo.sort((a, b) => b.id - a.id);
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        result.push(`Customer ID: ${customer.personalId}`);
        result.push(`Total Money: ${customer.totalMoney}$`);
        result.push('Transactions:');

        for (const tr of customer.transactionInfo) {
            if (tr.type === 'withdraw') {
                result.push(`${tr.id}. ${tr.firstName} ${tr.lastName} withdrew ${tr.amount}$!`);
            } else {
                result.push(`${tr.id}. ${tr.firstName} ${tr.lastName} made deposit of ${tr.amount}$!`)
            }
        }
        return result.join('\n');
    }

    customerExists(personalId) {
        let customer = this.allCustomers.find(x => x.personalId === personalId);

        if (customer === undefined) {
            throw new Error('We have no customer with this ID!');
        }
        return customer;
    }
}