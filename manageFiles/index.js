var fs = require('fs');

const text = "hello this is a test";

fs.writeFile('./files/file.json', text, (err) => {
    if (err) throw err;
    console.log("saved Text");
});