function inventory(array) {
    let inventory = array.shift().split(', ');

    for (let element of array) {
        let cmd = element.split(' - ') [0];

        if (cmd === 'Collect') {
            let collectItem = element.split(' - ') [1];
            if (!inventory.includes(collectItem)) {
                inventory.push(collectItem);
            }
        } else if (cmd === 'Drop') {
            let dropItem = element.split(' - ') [1];
            if (inventory.includes(dropItem)) {
                inventory = inventory.filter(item => item !== dropItem);
            }
        } else if (cmd === 'Combine Items') {
            let equipment = element.split(' - ') [1];
            let oldItem = equipment.split(':') [0];
            let newItem = equipment.split(':') [1];

            let oldItemIndex = inventory.indexOf(oldItem);
            if (oldItemIndex !== -1) {
                inventory.splice(oldItemIndex + 1, 0, newItem);
            }     
        } else if (cmd === 'Renew') {
            let renewItem = element.split(' - ') [1];
            let indexRenewItem = inventory.indexOf(renewItem);

            if (indexRenewItem !== -1) {
                inventory.splice(indexRenewItem,1);
                inventory.push(renewItem);
            }
        } else {
            console.log(inventory.join(', '));
            return;
        }
    }
}