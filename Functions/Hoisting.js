var message = "Hoisted!";

function greet() {
  console.log(message);
  var message = "Local message";
  console.log(message); // This will print "Local message"
}

greet();

console.log(message);

// --Let's Dive into Another Examples---

console.log(x); // undefined
var x = 10;

// Hoisting with let
console.log(y); // ReferenceError
let y = 20;

// Hoisting with const
console.log(z); // ReferenceError
const z = 30;
