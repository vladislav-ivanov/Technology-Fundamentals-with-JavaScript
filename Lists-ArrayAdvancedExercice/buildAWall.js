function buildWall(arr) {
    let totalUse = [];
    let sumTot = 0;
    let isComplete = false;

    while (!isComplete) {
        isComplete = true;
        let currentUse = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i]++;
                currentUse += 195;
                isComplete = false;
            }
        }
        if (!isComplete) {
            totalUse.push(currentUse);
            sumTot += currentUse * 1900;
        }
    }
console.log(`${totalUse.join(', ')}\n ${sumTot} pesos`);


}
buildWall([21, 25, 28]);