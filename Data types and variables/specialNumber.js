function special(num){
    let number = +num;
    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let numb = i;
        while (numb > 0) {
            let lastDigit = numb % 10;
            sum += lastDigit;
            numb = parseInt(numb / 10);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(i + ' -> ' + 'True');
        } else {
            console.log(i + ' -> ' + 'False');
        }
    }
}
special(15)