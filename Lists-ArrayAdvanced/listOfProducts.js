function solve(products){
products
.sort()
.forEach((e,i)=> console.log(`${i+1}.${e}`))
}
solve(["Potatoes","Tomatoes","Onions","Apples"])