function solve(arr) {
    let sum = +arr[1];
    let currentArray = arr[0].split(" ");
    let magic = [];

    for(let i = 0;i < currentArray.length - 1;i++){
        let currentElement = +currentArray[i];
        for(let j = i +1; j < currentArray.length;j++){
            let secondElement = +currentArray[j];

            if(currentElement + secondElement === sum){
                magic.push(currentElement + ' ' + secondElement)
            }
        }
    }
    console.log(magic.join("\n"));
}
solve(['1 7 6 2 19 23', '8'])