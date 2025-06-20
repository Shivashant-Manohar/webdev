//Create a function that takes an array of objects as input, 
// and returns the users whose age is ≥ 18 and gender is male.

/*

1. initialize a new array , push to a new array
2. use filter function inside an array , map , reduce function

*/

function filterUsers (users){
    let arr = [];
    for (let i=0;i<users.length;i++){
        if(users[i].gender==="male" && users[i].age>=18){
            arr.push(users[i].fname);
        }
    }
    return arr;
}

// Alternative implementation using the filter method
function filterUsersWithFilter(users) {
    return users
        .filter(user => user.gender === "male" && user.age >= 18)
        .map(user => user.fname);
}

const users = [
    {
        fname:"shivashant",
        age:21,
        gender:"male"
    },{
        fname:"sharayu",
        age:3,
        gender:"female"
    },{
        fname:"Sharva",
        age:5,
        gender:"male"
    },{
        fname:"shrutika",
        age:23,
        gender:"female"
    }
]

// Test both implementations
console.log("Using for loop:", filterUsers(users));
console.log("Using filter method:", filterUsersWithFilter(users));

