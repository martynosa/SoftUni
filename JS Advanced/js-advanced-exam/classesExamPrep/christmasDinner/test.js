class Circle {
    constructor(r) {
        this.r = r;
    }
    get r() {
        return this._r;
    }
    set r(value) {
        if (typeof value != 'number') {
            throw new TypeError('Expected number');
        }
        this._r = value;
    }
}
let bub = new Circle(5);
console.log(bub);