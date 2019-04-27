function solve(arr){
let lastElement = arr.pop();
let firstElement = arr.shift();
return Number(firstElement) + Number(lastElement);

}
console.log(solve(['20','30','40']))