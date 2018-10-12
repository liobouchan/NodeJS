var fs = require('fs');

const text = "Testing with Encoding";

fs.writeFile('./files/file1.txt' , text , 'utf8', (err) =>{
    if (err) throw err;
    console.log("Ready the File Write with encoding");
});