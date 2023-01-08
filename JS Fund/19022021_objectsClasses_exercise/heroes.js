function solve() {
    function hero(name, arg, attack, message) {
        return {
            name,
            message,
            health: 100,
            [arg]: 100,
            [attack]: function (m = "") {
                console.log(this.message + m);
                this[arg] -= 1
            },
        }
    }
    return {
        mage: i => new hero(i, 'mana', `cast`, `${i} cast`),
        fighter: i => new hero(i, 'stamina', `fight`, `${i} slashes at the foe!`),
    }
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);