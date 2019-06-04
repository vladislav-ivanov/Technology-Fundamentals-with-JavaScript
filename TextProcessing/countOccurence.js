function soolve(str,word){
    let words = str.split(' ');
    let counter =0;
    for(let w of words){
        if(w === word){
            counter++
        }
    }
console.log(counter);

}
soolve("This is a word and it also is a sentece", "is")