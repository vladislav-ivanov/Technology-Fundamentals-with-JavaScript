function storeProvision(input) {
    let currentStock = input[0];
    let orderStock = input[1];

    let result = {};

    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 === 0) {
            result[currentStock[i]] = +currentStock[i + 1]
        }
    }
    for(let i =0;i<orderStock.length;i++){
        if(i%2===0){
            if(result.hasOwnProperty(orderStock[i])){
                let key = orderStock[i];
                let value = +orderStock[i+1];
                result[key]+=value;
            }else{
                result[orderStock[i]]= +orderStock[i+1];
            }
        }
    }
    console.log(result);
    
}
storeProvision([['Chips', '5', 'CocaCola', '9',
    'Bananas', '14', 'Pasta', '4', 'Beer',
    '2'], ['Flour', '44', 'Oil', '12',
    'Pasta', '7', 'Tomatoes', '70',
    'Bananas', '30']])