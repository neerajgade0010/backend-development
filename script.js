const fs = require('fs')
// new file creation -->
fs.writeFile("hey.ext" , "hey this file" , function(err){
    if(err) console.log(err);
    else console.log("done")
})
// append(likhe hue main agay add kro)
// file and extra gyan pelna ho to use append
fs.appendFile("hey.txt" ,"ye append text hain samjhe" , function(err){
    if(err) console.log(err);
    else console.log("done");
})
// rename file->
fs.rename("hey.txt" , "helobro.txt" , function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.rename("hey.ext" , "hey.txt" , function(err){
    if(err) console.error(err);
    else console.log("ho gya guru change"); 
})
// copy file -->
fs.copyFile("hey.txt" ,"./copy/capy.txt" , function(err){
    if(err) console.error(err);
    else console.log("done bay")
}  )
// unlink -->
fs.unlink("helobro.txt" , function(err){
    if(err) console.err(err);
        else console.log("le delete"); 
})