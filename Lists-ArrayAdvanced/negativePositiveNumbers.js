function solve(arr) {
    let resultArray = [];
    for (let element of arr) {
        if (element < 0) {
            resultArray.unshift(element);
        } else {
            resultArray.push(element);
        }
    }
    console.log(resultArray.join('\n'));
}
solve([7, -2, 8, 9])