function merge(firstArr, secondArr){
let thirdArr = [];

for(let i = 0; i < firstArr.length; i++){
    if(i%2 ===0){
        thirdArr.push(+firstArr[i] + +secondArr[i]);
    }else{
        thirdArr.push(firstArr[i]+secondArr[i]);
    }
}
console.log(thirdArr.join(" - "));
}
merge(["5","15","23","56","35"],["17","22","87","36","11"])