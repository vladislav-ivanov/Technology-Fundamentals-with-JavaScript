function ages(num){
    if (num < 2){
        console.log('baby');
    }else if(num >=3 && num <= 13){
        console.log('child');
    }else if(num>=14 && num<= 19){
        console.log('teenager');
    }else if(num>=20 && num<=65){
        console.log('adult');
    }else if(num>=66){
        console.log('elder');
    }
}