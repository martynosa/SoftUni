//rounding numbers
function rounding(n, precision) {
    if ( precision > 15) {
        precision = 15
    }

    const result = n.toFixed(precision) //rounding syntax - returns the value as string
    console.log(parseFloat(result)); //returns floating point number

}

rounding(3.1415926535897932384626433832795, 2);