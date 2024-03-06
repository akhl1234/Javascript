// Function expression---

const welcomeMessage = function (name) {
  console.log(
    `Hello ${name}, can you explain in your own words what a Named function is in JavaScript?`
  );
};

welcomeMessage("Akhalque");

// Anonymous Function---
let Anonymous = function Introduce(Name, City) {
  console.log(`I am ${Name} and i Live at ${City}!`);
};
Anonymous("Shameer", "New_Delhi");

// Nested:  practice of defining a function inside another function.

function outerFunction() {
  let Hey = "open me! ";
  function innerFunction() {
    console.log(Hey);
  }
  innerFunction();
}
outerFunction();

// Function Call()---

function using_Call(num1, num2) {
  return num1 * num2;
}
let result = using_Call.call(this, 15, 10); // always use this we donot use it will return NaN---
console.log(result);
