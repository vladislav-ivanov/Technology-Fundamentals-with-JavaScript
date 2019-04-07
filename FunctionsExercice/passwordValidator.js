function passwordValidator(pass){
let isValid = true;
let digits = 0;
let isIncorect = false;
if(pass.length< 6 || pass.length> 10){
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
}
pass = pass.toLowerCase();
for(let index in pass){
    let asciElement = pass.charCodeAt(index);
    if(asciElement<48 || (asciElement>57&& asciElement<97&&asciElement>122)) {
isIncorect = true;
    }
    if(asciElement>= 48 && asciElement<=57){
        digits++;
    }
}
if(isIncorect){
    console.log("Password must consist only of letters and digits");
    isValid = false;
}
if(digits<2){
    console.log("Password must have at least 2 digits");
    isValid = false;
}
if(isValid){
    console.log("Password is valid")
}
}
passwordValidator('logIn')