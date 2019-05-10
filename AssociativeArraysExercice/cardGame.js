function deckValue(input) {
    let powers = {
        '2': 2, '3': 3, '4': 4, '5': 5,
        '6': 6, '7': 7, '8': 8, '9': 9,
        '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    }
    let multipliers = {
        'S': 4, "H": 3, 'D': 2, 'C': 1
    }
    function cardValue(card) {
        let power = card.slice(0, card.length - 1);
        let multi = card[card.length - 1];
        return powers[power] * multipliers[multi]
    }
    let players = {};
    for (let play of input) {
        let tokens = play.split(': ');
        let name = tokens[0];
        let cards = tokens[1].split(', ').map(c => cardValue(c));
        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }
        players[name] = players[name].concat(cards).filter((card,index,deck)=>index===deck.indexOf(card));
    }
    for(let player in players){
let sum = players[player].reduce((a,b)=>a+b,0)
        console.log(`${player}: ${sum}`);
        
    }
}
deckValue(['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'])