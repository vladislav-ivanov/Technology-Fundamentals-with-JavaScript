function solve(array) {
    let sumOdd = 0;
    let sumEven = 0;
    let difference = 0;
    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i]);
    }

    for (let num of array) {
        if (num % 2 === 0) {
            sumOdd += num;
        } else {
            sumEven += num;
        }
        difference = sumOdd - sumEven;

    }
    console.log(difference);
}
solve([3, 5, 7, 9])