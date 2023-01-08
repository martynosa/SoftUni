function solve(char) {

    // console.log(char.toUpperCase()) // converts string to upper letters
   // console.log(char.toLowerCase()) // to lowers case

   let upper = char.toUpperCase();
   let result = ''

   if( upper === char) {
       result = 'upper-case'
   } else {
       result = 'lower-case'
   }
   console.log(result)

}
solve('a')