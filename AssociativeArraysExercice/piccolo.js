function parking(allCarNumbers) {
    let carNumsMap = new Map();

    for (let currentNumber of allCarNumbers) {
        currentNumber = currentNumber.split(', ');
        let action = currentNumber.shift();
        currentNumber = currentNumber.join('');

        if (action === "IN") {
            carNumsMap.set(currentNumber, 1);
        } else if (action === "OUT") {
            carNumsMap.delete(currentNumber);
        }
    }
    let sortedCarNumbers = [...carNumsMap].sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNumbers.length > 0) {
        sortedCarNumbers.forEach(x => console.log(x[0]))
    } else {
        console.log("Parking Lot is Empty");

    }
}
parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])