var fs = require('fs');

const text = "Testing with Encoding";
const text1 = "Texto Dos";

var texto = "{"+
                text +
                ","+
                text1 +
            "}"

fs.writeFile('./files/file2.txt' , texto , 'utf8', (err) =>{
    if (err) throw err;
    console.log(texto);
    console.log("Ready the File Write with encoding");
});