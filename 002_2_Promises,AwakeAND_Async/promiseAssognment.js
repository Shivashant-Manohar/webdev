// function waitFor3sec(resolve) {
//   setTimeout(resolve, 5000);
// }

// function setTimeoutPromisified() {
//   return new Promise(waitFor3sec);
// }

// function main() {
//   console.log("main is called");
// }

// setTimeoutPromisified().then(main); // promise based approach
// setTimeout(main,5000); // callback based approach

const fs = require('fs')
function fileRead(err,data){

}
fs.readFile("hi.txt","utf-8").then(fileRead)