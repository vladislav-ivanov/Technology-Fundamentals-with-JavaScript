function solve(name, area, population, country, postCode) {
    let result = {
        name,
        area,
        population,
        country,
        postCode
    };
    let entries = Object.entries(result);
    for (let pairs of entries) {
        console.log(`${pairs[0]} -> ${pairs[1]}`);
    }
}
solve("Sofia", "492", "1238438", "Bulgaria", "1000")