// Let's explore some examples---

let User = {
  Name: "Akhlaque",
  Profession: "Programmer",
  Roll_Code: 786,

  Welcome: function UsingThis() {
    console.log(`My Name Is ${this.Name}. Thanks!`);
    console.log(this); // It will print everything--
  },
};

User.Welcome();
// User.Name = "Shameer"; // The name will change---
// User.Welcome();

// Let's explore the power of the `this` keyword--

function PowerThis() {
  console.log(this);
}

PowerThis();

// Arrow Function--
// Syntax: and their Examples
const arrowFunction = () => {
  let method = "Arrow-Functions";
  console.log(method);
};

arrowFunction();

const exampleDescription =
  "In this example, we will square some numbers using arrow functions.";

const squareNumber = (num) => {
  return num * num;
};

console.log(squareNumber(5));

// try another method using implicit return it helps you write less code;
let squareNumbers = (numbers) => numbers * numbers;
console.log(squareNumbers(2.5));
