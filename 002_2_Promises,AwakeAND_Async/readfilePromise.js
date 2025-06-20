const fs = require("fs");

function readtheFile (sendTheFinalValueHere){
    // do async operations here and when done, just call the first argument to this function
    fs.readFile("hi.txt","utf-8",function(err,data){
        sendTheFinalValueHere(data);
    })
}

function readFile (filename){
    // read the file and return it's value
    return new Promise(readtheFile);
}

const p = readFile();

function callback(contents){
    console.log(contents);
}

p.then(callback)















// const fs = require("fs");

// function readFile(filename) {
//   return new Promise(function (resolve) {
//     fs.readFile(filename, "utf-8", function (err, data) {
//       resolve(data);
//     });
//   });
// }

// function callback(contents) {
//   console.log(contents);
// }

// const p = readFile("002_2_Promises,AwakeAND_Async/hi.txt");
// p.then(callback);
