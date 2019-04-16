function solve(arr) {
    let size = arr[0];
    let field = new Array(size).fill(0, 0, size);
    let ladyBugIndex = arr[1].split(' ').map(Number).filter(i => i >= 0 && i < size);
    ladyBugIndex.forEach(i => field[i] = 1);

    for (let i = 2; i < arr.length; i++) {
        let tokens = arr[i].split(" ");
        let index = Number(tokens[0]);
        let direction = tokens[1];
        let fligthLength = Number(tokens[2]);
        if (field[index] === 1) {
            field[index] = 0;
            while (index >= 0 && index < field.length) {
                if (direction === 'right') {
                    index += fligthLength;
                } else if (direction === 'left') {
                    index -= fligthLength;
                }
                if (field[index] === 0) {
                    field[index] = 1;
                    break;
                }
            }
        }
    }
    console.log(field.join(' ')); 
}

solve([3, '0 1',
    '0 right 1',
    '2 right 1']
)