function rotation(arr, number) {
    for (let i = 0; i < number; i++){
        let pushedElem = arr.shift();
        arr.push(pushedElem);
    }
    console.log(arr.join(" "));
}
rotation([51, 47, 32, 61, 21], 2)