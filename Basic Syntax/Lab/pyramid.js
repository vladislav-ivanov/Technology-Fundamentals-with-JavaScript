function pyramid(base, increment) {
    let allStone = 0;
    let allMarble = 0;
    let allGold = 0;
    let allLapis = 0;
    let final = 0;
    let curbase = base;

    while (curbase > 2) {
        let marble = curbase * 4 - 4;
        let stone = curbase * curbase - marble;
        allStone += stone;

        final++;
        if (final % 5 === 0) {
            allLapis += marble;
        } else {
            allMarble += marble;
        }

        curbase-=2;

    }
    final++;
     allGold = curbase * curbase;

    stone = Math.ceil(allStone * increment);
    marble = Math.ceil(allMarble * increment);
    gold = Math.ceil(allGold * increment);
    lapis = Math.ceil(allLapis * increment);
    height = Math.floor(final * increment);


    console.log('Stone required: ' + stone);
    console.log('Marble required: ' + marble);
    console.log('Lapis Lazuli required: ' + lapis);
    console.log('Gold required: ' + gold);
    console.log('Final pyramid height: ' + height)
}
pyramid(11, 1);