function camino(params) {
    let bestDna = [];
    let bestSample = 0;
    let bestSum = 0;
    let bestSequenceLength = 0;
    let bestSequIndex = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < params.length; i++) {
        let currentDna = params[i].split('!').filter(e => e !== '').join('');
        let currenSample = i;
        let currenSum = currentDna.split('').filter(e => e === '1').length;
        let bestSequence = currentDna.split('0').sort((a, b) => b.length - a.length)[0];
        let curentIndex = currentDna.indexOf(bestSequence);

        let foudBetterDna = false;

        if (bestSequenceLength < bestSequence.length) {
            foudBetterDna = true;
        } else if (bestSequenceLength === bestSequence.length && bestSequIndex > curentIndex) {
            foudBetterDna = true;
        } else if (bestSequenceLength === bestSequence.length && bestSequIndex === curentIndex && bestSum < currenSum) {
            foudBetterDna = true;
        }

        if (foudBetterDna) {
            bestDna = currentDna.split('').join(' ');
            bestSample = currenSample;
            bestSum = currenSum;
            bestSequenceLength = bestSequence.length;
            bestSequIndex = curentIndex;
        }
    }
    console.log(`Best DNA sample ${bestSample} with sum: ${bestSum}.\n${bestDna}`);
    
}
camino([5,
    '1!0!1!1!0',
    '0!1!1!0!0'])