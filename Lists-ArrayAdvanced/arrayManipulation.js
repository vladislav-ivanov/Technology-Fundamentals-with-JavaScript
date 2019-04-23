function solve(input) {
    let numbers = input
        .shift()
        .split(' ')
        .map(Number);

    for (let operation of input) {
        let splitOperation = operation.split(' ');
        let command = splitOperation[0];
        let firstNumber = Number(splitOperation[1]);
        let seconsNumber = Number(splitOperation[2]);

        switch (command) {
            case "Add":
                numbers.push(firstNumber)
                break;
            case "Remove":
            numbers = numbers.filter(n => n !== firstNumber)
                break;
            case "RemoveAt":
                numbers.splice(firstNumber, 1);
                break;
            case "Insert":
                numbers.splice(seconsNumber, 0, firstNumber)
                break;
        }
    }
    console.log(numbers.join(' '));
    
}
solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"])