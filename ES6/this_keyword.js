// 1. 'this' in a regular function
function regularFunction() {
  console.log("'this' in regular function:", this);
}
regularFunction();

// 2. 'this' in an object method
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet();

// 3. 'this' in a class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const alice = new Person("Alice");
alice.greet();

// 4. 'this' in an arrow function
const arrowFunction = () => {
  console.log("'this' in arrow function:", this);
};
arrowFunction();

const obj = {
  arrowFunction: () => {
    console.log("'this' in arrow function inside object:", this);
  },
};
obj.arrowFunction();
(window in browsers)// 5. 'this' in an event handler
.document
  .getElementById("myButton")
  .addEventListener("click", function () {
    console.log("'this' in event handler:", this);
  });

document.getElementById("myButton").addEventListener("click", () => {
  console.log("'this' in arrow function event handler:", this);
});
