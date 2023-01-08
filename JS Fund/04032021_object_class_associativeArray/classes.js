class Button { //шаблон за бутона
    constructor(backgroundColor, textColor, text,) {
        this.backgroundColor = backgroundColor;
        this.textColor = textColor;
        this.text = text;
    }


    showText() {
        console.log(this.text);
    }

    changetext(newText) {
        this.text = newText;
    }
}

let button = new Button(`blue`, `black`, `Обучения`);//създаване на бутон
let secondButton = new Button(`blue`, `black`, 'Преподаватели');//създаване на втори бутон

button.changetext(`Сертификати`);
button.showText();