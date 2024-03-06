// Explanation: Global vs. Local Scope

// Introduction to Global Variables
// If a variable is used without declaring it, it automatically becomes a global variable.
let Intro_Global =
  "A variable that isn't explicitly declared becomes a global variable.\n";

// Introduction to Local Scope
// A variable can also have a local scope, meaning it's accessible only within a function.
let Intro_Local =
  "A variable can have local scope, accessible only within a function.\n";

// Example: Demonstrating the Change in a Global Variable

// Initialize a global variable 'a'
let a = "hello";

// Function to modify the global variable 'a'
function greet() {
  a = 3; // Changes the value of 'a'
  console.log("Inside the function (local scope), the value of 'a' is:", a);
}

console.log(
  "Outside the function (global scope), the initial value of 'a' is:",
  a
);

// Call the function
greet();

// After the function call, the global variable 'a' has been modified
console.log("After the function call, the updated value of 'a' is:", a);
