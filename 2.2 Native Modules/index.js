const fs = require("fs");

/*
fs.writeFile("msg.txt", "abc1 efg", (err) => {

    if (err) throw err;

    console.log("file saved!");
});

*/
fs.readFile("msg.txt", (err, x) => {

    if (err) throw err;

    console.log("x = " + x);
});
