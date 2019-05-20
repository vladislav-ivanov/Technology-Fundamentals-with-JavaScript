function solve(firstName, lastName, age) {
    let result = {
        firstName,
        lastName,
        age
    };
    let entries = Object.entries(result);
    for (let pair of entries) {
        console.log(`${pair[0]}: ${pair[1]}`);

    }
}
solve("Peter", "Pan", 20);