function loadingBar(num){
    let result = '[';
    let number = num / 10;
    if (number == 10) {
        for (let j = 0; j < number; j++) {
 
            result += "%";
        }
        console.log(num + "%" + " " + "Complete!" + "\n" + result + "]")
    } else {
        for (let i = 0; i < 10; i++) {
 
            if (i < number) {
                result += "%"
            } else {
                result += "."
            }
 
 
        }
 
        console.log(num + "%" + " " + result + "]" + "\n" + "Still loading...")
    }
 
}
loadingBar(30)