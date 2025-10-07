const fs = require('fs')

fs.writeFile("hey.ext" , "hey this file" , function(err){
    if(err) console.log(err);
    else console.log("done")
})