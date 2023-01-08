
//Complex If/Else if/Else and basic math syntax(add,subtract,multiple,percentage)

//group of people, type of the group, and day of the week 
//"Total price: {price}"

//⦁	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
//⦁	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
//⦁	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
//You should reduce the prices in that EXACT order



function solve(numPeople, typeGroup, day) {
    let price = 0;
    if (typeGroup === 'Students') {
    //⦁	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
        
        if (day === 'Friday') {
            price = numPeople * 8.45
        } else if (day === 'Saturday') {
            price = numPeople * 9.8
        } else if (day === 'Sunday') {
            price = numPeople * 10.46
        }
    
        if (numPeople >= 30) {
            price = price - 0.15 * price // - 15% discount
            // price = price * 0.85 // other variant for -15% discount
            // price *= 0.85 // price equals price multipled by 0.85
            // price += 100 // price equals price + 100
        }
    
    } else if (typeGroup === 'Business') {
        //⦁	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
        
        if (numPeople >= 100 ) {
            numPeople -= 10
        }
        
        if (day === 'Friday') {
            price = numPeople * 10.9
        } else if (day === 'Saturday') {
            price = numPeople * 15.6
        } else if (day === 'Sunday') {
            price = numPeople * 16
        }
    
    } else if (typeGroup === 'Regular') {
    //⦁	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
        
        if (day === 'Friday') {
            price = numPeople * 15
        } else if (day === 'Saturday') {
            price = numPeople * 20
        } else if (day === 'Sunday') {
            price = numPeople * 22.5
        }
    
        if (numPeople >= 10 && numPeople <= 20) {
            price *= 0.95 // -5% Discount
        }   
    }
    console.log(`Total price: ${price.toFixed(2)}`) //round the price to 2nd decimal
}

solve(
    40,
    "Regular",
    "Saturday")
