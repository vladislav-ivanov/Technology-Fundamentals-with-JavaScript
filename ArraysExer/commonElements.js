function solve(firstAr, secondArr) {
    for (let i = 0; i < firstAr.length; i++) {
        for (let j = 0; j < secondArr.length; j++) {
            if (firstAr[i] === secondArr[j]) {
                console.log(firstAr[i]);
                break;
            }
        }

    }
}

solve(["Hey","hello",2,4,"Pecho","e"],["hey",5,"hello","Pesho",4,"i"])