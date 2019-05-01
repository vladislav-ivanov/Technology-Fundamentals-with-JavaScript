function searchNumber(arr,input){
let arrLength = input.shift();
let removedElements = input.shift();
let number = input.shift();
let newArr = [];
let sum = 0;

for(let i =0;i<arr.length;i++){
    if(i<arrLength){
        newArr.push(arr[i])
    }
}

for(let i = 0;i< newArr.length; i++){
    if(i < removedElements){
        newArr.shift();
    }
}
for(let i =0;i< newArr.length;i++){
    if(newArr[i]===number){
        sum+=1;
    }
}
console.log(`Number ${number} occurs ${sum} time.`)

}
searchNumber([5, 2, 3, 4, 1, 6],[5, 2, 3])