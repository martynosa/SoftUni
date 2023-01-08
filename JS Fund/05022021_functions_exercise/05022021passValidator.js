function passValid(pass) {
    //проверява дали дължината на паролата отговорая
    function passLength(str) {
        if( str.length >= 6 && str.length <= 10){
            return ``;
        } else {
            return `Password must be between 6 and 10 characters\n`;
        }
    }
    //проверява дали съдържа само букви и числа
    function onlyLettersAndDigits (str) {
        let isLetterDigit = true;
        for (const char of str) {
            let code = char.charCodeAt();
            if(code < 48 || code >57 && code < 65  || code > 90 && code < 97 ) {
                isLetterDigit = false;
            }
        }
        return isLetterDigit ? '' : 'Password must consist only of letters and digits\n';
    }
    //проверява дали съдържа поне 2 числа
    function twoDigits(str) {
        let count = 0;
        for (const char of str) {
            let code = char.charCodeAt();
            if (code >= 48 && code < 57) {
                count ++;
            }            
        }
        if ( count >= 2) {
            return '';
        } else {
            return 'Password must have at least 2 digits\n'
        }
    }
    
    let result = passLength(pass) + onlyLettersAndDigits(pass) + twoDigits(pass);
    return result ? result : 'Password is valid';


}
let result = passValid('logIn12');
console.log(result);