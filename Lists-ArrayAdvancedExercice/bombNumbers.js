function bombNum(arr, arr2) {
    
    let bombNum = arr2[0];
    let power = arr2[1];
    let bombIndex = arr.indexOf(bombNum);

    while(bombIndex !== -1){
let start = Math.max(0,bombIndex - power);
let end = power * 2 + 1;
arr.splice(start,end);
        bombIndex = arr.indexOf(bombNum)
    }
    let sum = arr.reduce((a,b) => a+b,0);
    console.log(sum);
    
}
bombNum([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])