function solve(distance, passangers, price){
let fuel = (distance/100)*7;
fuel += passangers * 0.100;
let money = fuel * price;
console.log(`Needed money for that trip is ${money} lv.`);
}
solve(260, 9, 2.49)