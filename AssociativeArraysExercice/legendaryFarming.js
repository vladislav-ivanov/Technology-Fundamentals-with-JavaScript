function solve(input) {
    let arr = input.split(' ');
    let keyMaterials = { fragments: 0, shards: 0, motes: 0 };
    let junk = {};
    let legendary = '';
    for (let i = 0; i < arr.length; i += 2) {
        let quantity = +arr[i];
        let material = arr[i + 1].toLowerCase();

        if (material === "fragments" || material === "shards" || material === "motes") {
            keyMaterials[material] += quantity;
        } else {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = 0;
            }
            junk[material] += quantity;
        }
        if (keyMaterials.shards >= 250) {
            legendary = "Shadowmourne";
            keyMaterials.shards -= 250;
            break;
        } else if (keyMaterials.fragments >= 250) {
            legendary = "Valanyr";
            keyMaterials.fragments -= 250;
            break;
        } else if (keyMaterials.motes >= 250) {
            legendary = "Dragonwrath";
            keyMaterials.motes -= 250;
            break;
        }
    }
    console.log(`${legendary} obtained!`);
    let sortedKey = Object.entries(keyMaterials)
        .sort(function (a, b) {
            let result = b[1] - a[1];
            if (result === 0) {
                result = a[0].localeCompare(b[0]);
            }
            return result;
        });
    for (let [material, quantity] of sortedKey) {
        console.log(`${material}: ${quantity}`);

    }
    let sortedJunk = Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]));

    for (let [material, quantity] of sortedJunk) {
        console.log(`${material}: ${quantity}`);
    }
}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')