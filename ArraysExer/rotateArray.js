function solve(arr){
    let rotations = +arr.pop();
    
    
   let switchedElement =0;
   for(let i = 0; i < rotations;i++){
      switchedElement = arr.pop();
       arr.splice(0,0,switchedElement);
   }
    console.log(arr.join(" "))
}
solve(['Banana','Orange','Coconut','Apple','15'])