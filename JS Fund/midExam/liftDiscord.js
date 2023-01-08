function lift(arr) {

    let waitingPeople = Number(arr.shift())
    arr = arr.shift().split(' ').map(Number)
    let check = Number(arr.length) * 4
    let index = 0

    while (waitingPeople > 0) {

        if (arr[index] < 4) {
            arr[index]++
            waitingPeople--
        } else {
            index++
        }

        if (index > arr.length) {
            break;
        }
    }

    let isFull = arr.reduce((a, b) => a + b)

    if (waitingPeople == 0 && isFull !== check) {
        console.log(`The lift has empty spots!`);
    } else if (waitingPeople > 0) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
    }

    console.log(arr.join(' '));
}
lift([
    "15",
    "0 0 0 0 0"
   ])