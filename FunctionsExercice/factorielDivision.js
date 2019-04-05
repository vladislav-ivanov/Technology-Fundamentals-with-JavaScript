function factrorial(first,second){
    function factCalculator(number){
        let facto = 1;
        for(let i =2;i<=number;i++){
            facto*=i;
        }
return facto;
    }
    let firstNumber = factCalculator(first);
    let secondNumb = factCalculator(second);

    let finalRes = firstNumber/secondNumb;
    console.log(finalRes.toFixed(2));
}
factrorial(6,2)