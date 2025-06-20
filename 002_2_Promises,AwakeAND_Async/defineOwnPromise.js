class Promise2 {
  constructor(fn) {
    // Use arrow function to preserve 'this'
    const afterDone = () => {
      this.resolve();
    };
    fn(afterDone);
  }
  then(callback) {
    this.resolve = callback;
  }
}

function readtheFile(resolve) {
  console.log("readTheFile called");
  setTimeout(function () {
    console.log("callback based setTimeout completed...");
    resolve();
  }, 3000);
}

function setTimeoutPromisified() {
  return new Promise2(readtheFile);
}

let p = setTimeoutPromisified();
function callback() {
  console.log("callback has been called");
}
p.then(callback);
