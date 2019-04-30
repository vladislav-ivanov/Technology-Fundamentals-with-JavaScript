function gladiatorInventory(input) {
let inventory = input.shift().split(' ');
for(let element of input){
    element = element.split(" ");
    let command = element[0];
    let equipment = element[1];

    if(command==="Buy"){
        if(!inventory.includes(equipment)){
            inventory.push(equipment);
        }
    }else if(command ==="Trash"){
        if(inventory.includes(equipment)){
            let trashIndex = inventory.indexOf(equipment);
            inventory.splice(trashIndex,1)
        }
    }else if(command ==="Repair"){
        if(inventory.includes(equipment)){
            let repairIndex = inventory.indexOf(equipment);
            inventory.splice(repairIndex,1);
            inventory.push(equipment)
        }
    }else if(command ==="Upgrade"){
        equipment=equipment.split("-");
        let currentEquipment = equipment[0];
        let upgradeEquipment = equipment[1];

        if(inventory.includes(currentEquipment)){
            let upgradeIndex = inventory.indexOf(currentEquipment)+1;
            inventory.splice(upgradeIndex,0,`${currentEquipment}:${upgradeEquipment}`);
        }
    }
}
console.log(inventory.join(' '));

}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])