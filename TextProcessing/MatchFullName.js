function solve(input){
let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
let validNames =[];
while((validName = pattern.exec(input)) !== null){
    validNames.push(validName[0]);
}
console.log(validNames.join(' '));

}
solve("Steven Son, Steven son, steven Son, STeven Son, Michael Braun, MichaelBraun")