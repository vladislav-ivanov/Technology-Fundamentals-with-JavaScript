function distinct(arr) {
    let uniqueElements = [];
    for (let element of arr) {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    }
    console.log(uniqueElements.join(" "))
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2])