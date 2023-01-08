function solve(input) {
    input.pop();
    chatArr = [];


    for (let eachCommand of input) {
        
        let eachCommandSplit = eachCommand.split(` `);
        let command = eachCommandSplit[0];

        if (command === `Chat`) {
            chatArr.push(eachCommandSplit[1]);
        } else if (command === `Edit`) {
            if (chatArr.includes(eachCommandSplit[1])) {
              let index = chatArr.indexOf(eachCommandSplit[1]);
                
                chatArr.splice(index, 1, eachCommandSplit[2]);
            }

        } else if (command === `Spam`) {
            let spamMessage = eachCommandSplit.splice(1);

            chatArr.push(...spamMessage);
           
        } else if ( command === `Pin`){
            if (chatArr.includes(eachCommandSplit[1])){
                indexPinnedItem = chatArr.indexOf(eachCommandSplit[1]);
                pinnedItem = chatArr.splice(indexPinnedItem,1);
                chatArr.push(...pinnedItem);
            }
              
        } else if (command === `Delete`) {
            if(chatArr.includes(eachCommandSplit[1])){
                indexDeletedItem = chatArr.indexOf(eachCommandSplit[1]);
                chatArr.splice(indexDeletedItem,1);
            }
        }

    }


    for (const eachMessage of chatArr) {
        console.log(eachMessage);
    }
    


}
solve(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"]);