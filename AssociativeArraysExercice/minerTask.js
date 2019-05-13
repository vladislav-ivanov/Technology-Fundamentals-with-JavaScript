function solve(input) {
    let resourse = {};
    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let quantity = +input[i + 1];
        if (!resourse.hasOwnProperty(name)) {
            resourse[name] = 0;
        }
        resourse[name] += quantity;
    }
    for (let resours in resourse) {
        console.log(`${resours} -> ${resourse[resours]}`);

    }
}
solve(['Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])