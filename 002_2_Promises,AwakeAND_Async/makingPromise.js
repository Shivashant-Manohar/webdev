// const { resolve } = require("path");

// function random(resolve){
//   setTimeout(resolve,3000);
// }

// let p = new Promise (random);
// // supposed to return something

// function callback (){
//   console.log("promise succeded");
// }
// p.then(callback);

const fs = require("fs");

console.log();
console.log("-----Start-----");

function readtheFile(resolve) {
  console.log("readTheFile called");
  setTimeout(function () {
    console.log("callback based setTimeout completed");
    resolve();
  }, 3000);
}

function setTimeoutPromisified(filename) {
  console.log("setTimeoutPromisified called");
  return new Promise(readtheFile);
}

const p = setTimeoutPromisified();

function callback() {
  console.log("timer is done");
}

p.then(callback);

console.log("------end------");
console.log();
