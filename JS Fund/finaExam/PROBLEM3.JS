function solve(input) {
    obj = {};


    while ((line = input.shift()) !== `Log out`) {


        let [command, username, count] = line.split(`: `);

        if (command === `New follower`) {
            if (!obj.hasOwnProperty(username)) {
                obj[username] = { likes: 0, comments: 0, overall: 0 }
                let userInfo = obj[username];
                userInfo.overall = userInfo.likes + userInfo.comments;
            }

        } else if (command === `Like`) {
            if (!obj.hasOwnProperty(username)) {
                obj[username] = { likes: 0, comments: 0, overall: 0 };
                let userInfo = obj[username];
                userInfo.likes += Number(count);
                userInfo.overall = userInfo.likes + userInfo.comments;
            } else {
                let userInfo = obj[username];
                userInfo.likes += Number(count);
                userInfo.overall = userInfo.likes + userInfo.comments;
            }

        } else if (command === `Comment`) {
            if (!obj.hasOwnProperty(username)) {
                obj[username] = { likes: 0, comments: 1, overall: 0 };
                let userInfo = obj[username];
                userInfo.overall = userInfo.likes + userInfo.comments;
            } else {
                let userInfo = obj[username];
                userInfo.comments += 1;
                userInfo.overall = userInfo.likes + userInfo.comments;
            }


        } else if (command === `Blocked`) {
            if (!obj.hasOwnProperty(username)) {
                console.log(`${obj.Username} doesn't exist.`);
            } else {
                delete obj[username];
            }

        }



    }

    let sortedObj = Object.entries(obj)
    let followers = Object.keys(obj)

    console.log(`${followers.length} followers`);

    for (const [name, info] of sortedObj) {
        console.log(`${name}: ${info.overall}`);


    }


}
solve(["New follower: george",
    "Like: george: 5",
    "Comment: george",
    "New follower: george",
    "New follower: john",
    "Comment: george",
    "Comment: john",
    "Comment: peter",
    "Log out"]);