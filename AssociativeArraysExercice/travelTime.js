function solve(input) {
    let coutries = new Map();
    for (let string of input) {
        let parts = string.split(' > ');

        let country = parts[0];
        let town = parts[1];
        let price = parts[2];
        if (!coutries.has(country)) {
            let townsToPriceMap = new Map();
            townsToPriceMap.set(town, price);
            coutries.set(country, townsToPriceMap);
        } else {
            let existingTowns = coutries.get(country);
            if (existingTowns.has(town)) {
                let existingPrice = existingTowns.get(town);
                if (price < existingPrice) {
                    existingTowns.set(town, price);
                }
            } else {
                existingTowns.set(town, price);
            }
        }
    }
    let sortedCountries = [...coutries].sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, townsMap] of sortedCountries) {
        let sortedTowns = [...townsMap]
        .sort((a, b) => a[1] - b[1])
        .map(element => `${element[0]} -> ${element[1]}`);
        console.log(`${country} -> ${sortedTowns.join(' ')}`);
    }
    
    
}
solve(['Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200'])