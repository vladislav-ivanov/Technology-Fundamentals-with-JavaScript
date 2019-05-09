function solve(input) {
    let result = new Map();

    for (let word of input) {
        if (!result.has(word)) {
            result.set(word, 1)
        } else {
            result.set(word, result.get(word) + 1)
        }

    }
    let sortedMap = [...result]
        .sort((a, b) => b[1] - a[1]);

    for (let [word, value] of sortedMap) {
        console.log(`${word} -> ${value} times`);

    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])