function solve(arr) {
    let newArr =[];
    let num = Number(arr[arr.length - 1]);
    for (let i = 0; i < arr.length-1; i+=num) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "));
}
solve(['5', '20', '31', '4', '20', '2'])