function triangleOfNumbers(number){
    let sequence="";
    for(let i = 1; i <= number;i++){
    for(let j = 1; j <= i; j++){
    sequence+= i + ' ';
    }
    console.log(sequence);
    sequence = '';
}
}
triangleOfNumbers(3)