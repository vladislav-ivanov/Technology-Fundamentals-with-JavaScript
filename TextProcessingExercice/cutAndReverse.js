function solve(input){

let index = input.length/2;
let first = input.slice(0,index).split('').reverse().join('');
let second = input.slice(index).split('').reverse().join('');
console.log(`${first}\n${second}`);

}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')