function solve(arr) {
    let newArr = [];
    let currAray = arr[0].split(" ");

    for (let i = 0; i < currAray.length; i++) {
        let temporaryArr = [];
        for (let j = i; j < currAray.length; j++) {
            if(currAray[i]===currAray[j]){
                temporaryArr.push(currAray[i]);
            }else{
                break;
            }

        }
        if(newArr.length<temporaryArr.length){
            newArr = temporaryArr;
        }
    }
console.log(newArr.join(" "));
}
solve(['2 1 1 2 3 3 2 2 2 1'])