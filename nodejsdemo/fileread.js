//Functionality/Package import
var fs = require('fs');

fs.readFile('./files/node.txt', function(err, content){
    console.log('Contents: ' + content);
})