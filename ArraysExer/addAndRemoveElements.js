function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            newArr.push(i + 1);
        } else if (arr[i] === 'remove') {
            newArr.pop(i);
        }
    }
    if(newArr.length > 0){
        console.log(newArr.join(" "))
    }else{
        console.log('Empty')
    }
    
}
solve(['remove', 'remove'])