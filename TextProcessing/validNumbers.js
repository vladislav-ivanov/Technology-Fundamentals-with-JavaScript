function solve(input){
let pattern = /(?<=\s|^)-?\d+(\.\d+)?(?=\s|$)/g;
let validNums = [];
while((validNum = pattern.exec(input))!==null){
    validNums.push(validNum[0]);
    
}
console.log(validNums.join(' '));
}
solve("1 -1 1s 123 s-s -123 _55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5")