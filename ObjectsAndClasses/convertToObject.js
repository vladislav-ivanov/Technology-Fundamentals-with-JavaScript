function solve(jsonString) {
    let personObj = JSON.parse(jsonString);
    let entries = Object.entries(personObj);
    for (let pair of entries) {
        console.log(`${pair[0]}: ${pair[1]}`);

    }
}
solve(`{"name": "George", "age": 40, "town": "Sofia"}`)