function solve(num, arr) {
    let resultArr = [];
    for (let i = num - 1; i >= 0; i--) {
      resultArr.push(arr[i]);
    }
    console.log(resultArr.join(" "));
}
solve(3, [10, 20, 30, 40, 50]);