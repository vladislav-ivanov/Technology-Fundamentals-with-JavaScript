function wordLength(sentence){
let arr = sentence.split(/[\,\.\!,\?\s]+/).filter(x=>x !=='');
let sortWords = arr.slice().sort((a,b)=>a.length - b.length);
let shortestWord = sortWords[0].length;
let longestWord = sortWords[sortWords.length - 1].length;
let shortest = arr.find(w=>w.length===shortestWord);
let longest = arr.find(w=>w.length===longestWord);
console.log(`Longest -> ${longest}\nShortest -> ${shortest}`)
}
wordLength("Hello people, are you familiar with the terms of application at the software university?");