function extracFile(input) {
    let path = input.split(`\\`);

    fileName = path.pop();


    fileExstention = fileName.split(`.`).pop();
    console.log(`File name: ${fileName.split(`.`).shift()}`);
    console.log(`File extension: ${fileExstention}`);

}
extracFile('C:\\Internal\\training-internal\\Template.asdf.pptx');