class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    increase(length) {
        this.innerLength = this.innerLength + length;
        //this.innerLength > this.innerString.length ? this.innerLength = this.innerString.length : this.innerLength;

    }
    decrease(length) {
        this.innerLength = this.innerLength - length;
        this.innerLength < 0 ? this.innerLength = 0 : this.innerLength;
    }

    toString() {
        if (this.innerLength >= this.innerString.length) {
            this.innerLength = this.innerString.length;
            return `${this.innerString.substr(0, this.innerLength)}`
        }

        return `${this.innerString.substr(0, this.innerLength)}...`
    }



}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test


let s = new Stringer("Viktor", 6);
console.log(s.toString());
