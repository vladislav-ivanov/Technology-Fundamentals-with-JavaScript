function solve(arr1, arr2) {
   let index = 0;
    let sumArr = 0;
    let equal = true;
    while(index<arr1.length && index< arr2.length){
        if(arr1[index] !== arr2[index]){
            equal = false;
            break;
        }
        sumArr += Number(arr1[index]);
        index++;
    }
    if(equal){
        console.log(`Arrays are identical. Sum: ${sumArr}`)
    }else{
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
}
solve(['10','20','30'],['10','20','30'])