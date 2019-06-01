function solve(input) {

    function sortingElement(a, b) {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    }
    let newArr = input.filter((e, i, arr) => i === arr.indexOf(e)).sort(sortingElement);

    console.log(newArr.join('\n'));

}
solve(["Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"]);