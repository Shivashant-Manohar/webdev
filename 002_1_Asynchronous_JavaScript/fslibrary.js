
const fs = require("fs");

const contents1 = fs.readFile('a.txt','utf-8');  // Asynchronous
console.log(contents1);

const contents2 = fs.readFileSync('b.txt','utf-8');  // Synchronous
console.log(contents2);

