function characters(param1,param2){
    let start = param1.charCodeAt(0);
    let end = param2.charCodeAt(0);
    let chars = [];
    
    if(end<start){
        let temp = start;
        start = end;
        end = temp;
    }
    for(let i = start +1; i < end;i++){
        chars.push(String.fromCharCode(i));
    }
    console.log(chars.join(" "))
    }
characters('#',':')