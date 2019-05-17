function solve(input) {
    let trackedWord = {};
    let wordToTrack = input.shift().split(' ');
    for (let word of wordToTrack) {
        trackedWord[word] = 0;
    }
    for (let word of input) {
        if (trackedWord.hasOwnProperty(word)) {
            trackedWord[word]++;
        }
    }
    let sortedWord = Object.entries(trackedWord).sort((a, b) => b[1] - a[1]);
    for (let word of sortedWord) {
        console.log(`${word[0]} - ${word[1]}`);

    }
}
solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to'
    , 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])