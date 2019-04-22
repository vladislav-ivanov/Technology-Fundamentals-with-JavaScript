function solve(arr) {
    
    console.log(arr.filter((e, i) => e >= Math.max(...arr.slice(0, i + 1))).join(' '));
    }

solve(['1','3','8','4','10','12','3','2','24'])