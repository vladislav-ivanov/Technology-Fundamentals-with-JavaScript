function solve(numOne, numTwo, numThree) {
    let isNegativeBit = convertSignToBit(numOne) ^ convertSignToBit(numTwo) ^ convertSignToBit(numThree);
    if (numOne == 0 || numTwo == 0 || numThree == 0) {
        console.log('Positive');
    }
    else if (isNegativeBit) {
        console.log('Negative');
    } else {
        console.log('Positive');
    }
    function convertSignToBit(num) {
        return num < 0 ? 1 : 0;
    }
}
solve(-1, 0, 1)