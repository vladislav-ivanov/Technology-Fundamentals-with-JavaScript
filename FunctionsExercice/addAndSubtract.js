function main(first,second,last){
    function sumOfFirstAndSecond(frist,second){
        return first + second;
    }
    let finalResult = sumOfFirstAndSecond(first,second) - last;
console.log(finalResult);
}
main(23,6,10)