function timeout(){
    console.log("Click the button");
}

console.log("Hi!");

setTimeout(timeout,1000);

console.log("Welcome to the loupe.");

let c=0;
for(let i=0;i<100000000000;i++){
    c = c + 1 ;
}

console.log("Expensive operation done")