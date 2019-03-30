function vacation(arg1, arg2, arg3){
    let numOfPeople = arg1;
    let typeOfGroup = arg2;
    let dayOfWeek = arg3;
    let price = 0;
    let result = price * numOfPeople;

    switch (dayOfWeek){
        case 'Friday':
        if(typeOfGroup == 'Students'){
            price = 8.45;
 }else if(typeOfGroup == 'Business'){
     price = 10.90
 }else if(typeOfGroup == 'Regular'){
     price = 15;
 }
 break;
 case 'Saturday':
 if(typeOfGroup == 'Students'){
     price = 9.80;
 }else if(typeOfGroup == 'Business'){
     price = 15.60;
 }else if(typeOfGroup == 'Regular'){
     price = 20;
 }
 break;
 case 'Sunday':
 if(typeOfGroup == 'Students'){
     price = 10.46;
 }else if(typeOfGroup == 'Business'){
     price = 16;
 }else if(typeOfGroup == 'Regular'){
     price = 22.50;
 }
 break; 
    
    if(typeOfGroup == 'Students'&& numOfPeople >= 30){
        result = numOfPeople * (price * 0.85);
    }else if(typeOfGroup == 'Business' && numOfPeople >= 100){
       result = (price * numOfPeople) - (10 * price);
    }else if(typeOfGroup == 'Regular'&& numOfPeople >= 10 && numOfPeople <=20){
        result = (price * 0.95) * numOfPeople;
    }else{
        result = price * numOfPeople;
    }
}
    console.log('Total price: ' + result.toFixed(2));

    
    }
vacation(30,'Students','Sunday');