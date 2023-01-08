function furniture(input) {
    let result = `Bought furniture:`;
    sum = 0;

    for (const line of input) {

        //.exec() returns an array with group names as keys and values
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<count>[\d]+)/g;
        let match = regex.exec(line);

        if (match) {
            result += `\n${match.groups.name}`;
            sum += Number(match.groups.price) * Number(match.groups.count);

        }


    }

    result += `\nTotal money spend: ${sum.toFixed(2)}`
    console.log(result);

}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
);