function solve(num){
    let oddSum = 0;
    let evenSum = 0;

    let myNumber = num.toString().split('').map(Number);
    for(let i =0;i<myNumber.length;i++){
        if(myNumber[i]% 2 ===0){
            evenSum+=myNumber[i];
        }else{
            oddSum+=myNumber[i];
        }
    }
console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
solve(1000435)