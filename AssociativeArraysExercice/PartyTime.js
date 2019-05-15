function solve(input) {
    let partyIndex = input.indexOf('PARTY');
    let guestList = input.slice(0, partyIndex);
    


    for (let i = partyIndex + 1; i < input.length; i++) {
        let guest = input[i];
        let indexOfGuest = guestList.indexOf(guest);
        guestList.splice(indexOfGuest, 1);
    }
    let result = guestList.filter(g => Number.isInteger(+g[0]))
        .concat(guestList.filter(g => !Number.isInteger(+g[0])));
    console.log(`${result.length}\n${result.join('\n')}`);


}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'])