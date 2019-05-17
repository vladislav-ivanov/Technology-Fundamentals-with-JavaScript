function words(arr) {
    let wordToSearch = arr.shift().split(' ');
    let map = new Map();

    for (let word of wordToSearch) {
        map.set(word, 0);
    }
    for (let word of arr) {
        if (map.has(word)) {
            let value = map.get(word)+1;
            map.set(word, value);
        }
    }
    let result = [...map]
    .sort((a,b)=>b[1]-a[1])
    .forEach(e=>console.log(`${e[0]} - ${e[1]}`));
}
words(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to'
    , 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])