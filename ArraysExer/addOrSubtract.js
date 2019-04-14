function solve(arrFirst) {
    let newArr = [];
    let sumArr = 0;
    let newSum = 0;
    for (let i = 0; i < arrFirst.length; i++) {
        sumArr += arrFirst[i];

        if (arrFirst[i] % 2 === 0) {
            newArr[i] = arrFirst[i] + i;
            newSum+=newArr[i];
        }else{
            newArr[i] = arrFirst[i] - i;
            newSum+= newArr[i];
        }
    }
console.log(newArr);
console.log(sumArr);
console.log(newSum);
}
solve([5, 15, 23, 56, 35])