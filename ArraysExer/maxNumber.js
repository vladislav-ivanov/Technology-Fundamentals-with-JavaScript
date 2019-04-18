function solve(arr) {
    let topIntegers = [];
    for (let i = 0; i < arr.length; i++) {

        let currentElement = arr[i];
        let isTop = true;

        for (let j = i + 1; j < arr.length; j++) {

            if (currentElement <= arr[j]) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            topIntegers.push(currentElement);
        }
    }
    console.log(topIntegers.join(" "));
}
solve([1, 4, 3, 2])