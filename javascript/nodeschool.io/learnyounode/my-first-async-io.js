var fs = require('fs');

fs.readFile(process.argv[2], {encoding:"utf8"}, function(err, fileContents){
    if(err) return console.error(err);
    lines = fileContents.split("\n").length - 1;
    console.log(lines)
})
