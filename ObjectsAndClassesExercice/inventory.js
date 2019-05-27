function invetory(input) {
    let invetory = [];
    for (let inputRow of input) {
        let [name, level, items] = inputRow.split(" / ");
        level = +level;
        items = items.split(", ");

        invetory.push({
            name,
            level,
            items

        })
    }
    console.log(JSON.stringify(invetory));
    
}
invetory(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"])