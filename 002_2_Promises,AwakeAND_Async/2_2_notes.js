// -------------------- Classes in JavaScript --------------------
class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  area() {
    return this.width * this.height;
  }
  paint() {
    console.log("Color is " + this.color);
  }
}

// Example usage of Rectangle class
const rect = new Rectangle(12, 2, "red");
const rect2 = new Rectangle(3, 3, "blue");
const area = rect.area();
const col = rect.paint();
console.log(area, col);

// -------------------- Working with Date --------------------
const now = new Date(); // Current date and time
console.log(now.toISOString()); // Outputs the date in ISO format
console.log(now.getDay());      // Day of the week (0-6)
console.log(now.getFullYear()); // Full year (e.g., 2025)
console.log(now.getDate());     // Day of the month (1-31)

// -------------------- Objects vs Maps --------------------

// Object: key-value pairs
let user = {
  name: "Harkirat",
  age: 21
};
console.log(user.name);
user.name = "shivashant";
console.log(user.name);

// Map: another way to store key-value pairs
const me = new Map();
me.set('name', 'shivashant');
me.set('age', 20);
console.log(me.get('name'));

// -------------------- Promises and setTimeout --------------------

// setTimeout: callback-based asynchronous execution
function logname() {
  console.log("shivashant");
}
setTimeout(logname, 5000); // Calls logname after 5 seconds

// Promise-based setTimeout
function setTimeoutPromisified(ms) {
  // Returns a promise that resolves after ms milliseconds
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
  console.log("3 seconds have passed ");
}
setTimeoutPromisified(3000).then(callback); // Logs after 3 seconds

// Another way to promisify setTimeout
function waitFor3sec(resolve) {
  setTimeout(resolve, 5000); // Resolves after 5 seconds
}

function setTimeoutPromisified2() {
  return new Promise(waitFor3sec);
}

function main() {
  console.log("main is called");
}
setTimeoutPromisified2().then(main); // Logs after 5 seconds

// -------------------- Notes --------------------
/*
- Classes allow you to create objects with properties and methods.
- Date objects help you work with dates and times.
- Objects and Maps both store key-value pairs, but Maps offer more flexibility for dynamic keys.
- setTimeout schedules code to run after a delay (callback style).
- Promises provide a cleaner way to handle asynchronous code, allowing chaining with .then().
- You can "promisify" callback-based functions to use them with Promises.
*/


