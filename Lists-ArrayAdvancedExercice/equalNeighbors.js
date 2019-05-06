function solve(arr) {
    let counter = 0;
    for (let elements  arr) {
        while (elements > 0) {
            for (let i = 0; i < elements.length; i++) {
                for (let j = 0; j < elements[+1].length; j++) {
                    if (elements[i] === (elements + 1)[j]) {
                        counter += 1;
                    }
                }
            }
        }
    }
    console.log(counter);

}
solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);