const fs = require("fs");

function print(err,data){
    console.log(data);
}

// The task has been started, the file is being read, when done- this 
// asunchronous function will call the print function (like washing function)

fs.readFile("a.txt","utf-8", print ) ; 

fs.readFile("b.txt","utf-8", print ) ; 

setTimeout( () => {
    console.log("Hello man")
} , 0 );

console.log("Done!")

// Performance benefits


// function readFile (filepath,encoding,op/Callback function){
//     // read the file first, then will call-
//     op("Error", actual contents of file)
// }

