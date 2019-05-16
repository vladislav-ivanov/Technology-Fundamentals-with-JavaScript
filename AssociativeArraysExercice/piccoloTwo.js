function picccolo(arr) {
    let cars = [];

    for (let car of arr) {
        let [direction, number] = car.split(', ');
        if (direction === "IN") {
            if (!cars.includes(number)) {
                cars.push(number);
            }
        } else if (direction === "OUT") {
            if (cars.includes(number)) {
                let index = cars.indexOf(number);
                cars.splice(index, 1);
            }
        }
    }
    if(cars.length>0){
        let sortedNumbers = cars.sort((a,b)=>a.localeCompare(b)).forEach(number=>console.log(number));
    }else{
        console.log("Parking Lot is Empty");
        
    }
}
picccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])