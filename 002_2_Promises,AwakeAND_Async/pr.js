// the real operation that we want to promisify
function doAsyncOp (resolve){
  console.log(resolve)
}


const p = new Promise(doAsyncOp);

function callback (){
  console.log("3 seconds have passed ")
}

p.then(callback)
