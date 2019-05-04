function sortByTwoCriteria(input) {
    input = input.sort(compareLength);

    function compareLength(a, b) {
        if (a.length < b.length) {
            return a.length - b.length
        } else if (a.length === b.length) {
            return a > b
        } else if (a.length > b.length) {
            return a.length - b.length;
        }

    }
    for (let element of input) {
        console.log(element);

    }
}
sortByTwoCriteria(["alpha", "beta", "gamma"])