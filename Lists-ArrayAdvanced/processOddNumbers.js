function solve(arr) {
    let oddNumbers = arr
        .filter((e, i) => i % 2 != 0)
        .map(e => e * 2)
        .reverse();
    console.log(oddNumbers.join(' '));

}
solve([10, 15, 20, 25])