function solve(firstOperand, secondOperand, operator) {
    let operation;
    switch (operator) {
        case 'multiply':
            operation = (a, b) => a * b;
            break;
        case 'divide':
            operation = (a, b) => a / b;
            break;
        case 'add':
            operation = (a, b) => a + b;
            break;
        case 'subtract':
            operation = (a, b) => a - b;
            break;

    }
    let result = operation(firstOperand, secondOperand);
    console.log(result);
}
solve(20, 5, 'devide')