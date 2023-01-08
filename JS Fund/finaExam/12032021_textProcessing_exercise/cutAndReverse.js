function solve(str) {
    firstHalf = str.substring(0, str.length / 2);
    secondHalf = str.substring(str.length / 2);

    console.log(firstHalf.split(``).reverse().join(``));
    console.log(secondHalf.split(``).reverse().join(``));


}
solve('tluciffiDsIsihTgnizamAoSsIsihT');