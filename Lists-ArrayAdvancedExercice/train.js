function train(arr) {
  let wagons = arr.shift().split(' ').map(Number);
  let capacity = Number(arr.shift());
  for (let commands of arr) {
    let currentCommand = commands.split(" ");
    if (currentCommand[0] === "Add") {
      wagons.push(+currentCommand[1]);
    } else {
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + Number(currentCommand[0]) <= capacity) {
          wagons[i] += Number(currentCommand[0]);
          break;
        }
      }
    }
  }
  console.log(wagons.join(' '));
  
}
train(['32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75'])