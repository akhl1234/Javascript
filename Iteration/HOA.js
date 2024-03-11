// Introduction
const intro =
  "High-order array functions are functions that operate on arrays and are commonly used for tasks like iteration, filtering, mapping, and reducing arrays. They include functions like forEach, map, filter, reduce, and some, among others.";
console.log(intro);

// Iterate over an array
const numbers = [2, 3, 8, 6, "strs"];
console.log("Iterating over the numbers array:");
for (const num of numbers) {
  console.log(num);
}

// Iterate over a string
const greeting = "Hello, G";
console.log("Iterating over the greeting string:");
for (const letter of greeting) {
  console.log(`Each letter of the greeting is: ${letter}`);
}

// Map methods
console.log("Displaying the contents of the countryMap:");
const countryMap = new Map();
countryMap.set("IN", "India");
countryMap.set("Pak", "Pakistan");
countryMap.set("UK", "United Kingdom");
console.log(countryMap);

// Iterate over key-value pairs of an object
console.log("Iterating over the key-value pairs of the objectss object:");
const objectss = { A: 1, B: 2, C: 3, D: 4 };
for (const [key, value] of Object.entries(objectss)) {
  console.log(`${key} ${value}`);
}

// Iterate over key-value pairs of a map
console.log("Iterating over the key-value pairs of the countryMap:");
for (const [key, value] of countryMap) {
  console.log(`${key} => ${value}`);
}
