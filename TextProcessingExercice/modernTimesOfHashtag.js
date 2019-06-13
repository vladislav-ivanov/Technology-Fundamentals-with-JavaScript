function solve(input){
input.split(' ').forEach((word)=>{
    let patter = /#[A-Za-z]+/g;
if(patter.test(word)){
    console.log(word.slice(1));
}

});
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')