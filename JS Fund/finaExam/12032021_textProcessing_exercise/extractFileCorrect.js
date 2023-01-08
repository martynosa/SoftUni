function solve(path) {
    let pointIndex = path.lastIndexOf(`.`); //взема индекса на последния символ
    let extension = path.substring(pointIndex + 1)

    let lastLine = path.lastIndexOf(`\\`);
    let fileName = path.substring(lastLine + 1, pointIndex);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);

}
solve('C:\\Internal\\training-internal\\Template.pptx');