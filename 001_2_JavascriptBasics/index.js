let firstname = "Shiv";
const age = 21;
var isStudent = true;

console.log("firstname" , age , isStudent);
console.log( firstname , age , isStudent);

// don't use var




let number = 42;             // Number
let string = "Hello World";  // String
let isActive = false;        // Boolean
let numbers = [1, 2, 3];     // Array




function sum (a,b){
    let totalSum = a+b ;
    return totalSum;
}

let ans1 = sum(1,2);
let ans2 = sum("shiv"," , hello");

console.log(ans1);
console.log(ans2);




function canVote (age){
    if(age>=18){
        return true;
    } else{
        return false;
    }
}



// let age = 19;
console.log(canVote(21));
console.log(canVote(18));
console.log(canVote(9));




// For loop
for (let i = 0; i < 5; i++) {
    console.log(i); // Outputs 0 to 4
}

console.log()

// While loop
let j = 0;
while (j < 5) {
    console.log(j); // Outputs 0 to 4
    j++;
}




function greet (user){
    console.log("Hi "+ user.name + ". Your age is " + user.age);
}
let user = {
    name: "Shivashant" ,
    age : 21 ,
    gender : "male"
}
greet(user);
console.log(user.name)
console.log(user['name'])
console.log(user.age)

// ARRAY OF OBJECTS

let a = ["harkirat" , 19 , true]
let arr = [ "harkirat" , 19 , {
    name:"Shiv" ,
    age: 21 ,
    cities : ["bengaluru","delhi","mumbai" , {
        country : "malaysia" ,
        city : "Kuala lumpur"
    }]
}];
console.log(arr[2])
console.log(arr[2].cities)
console.log(arr[2].cities[3].city)