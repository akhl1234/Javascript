const intro =
  "High-order array functions are functions that operate on arrays and are commonly used for tasks like iteration, filtering, mapping, and reducing arrays. They include functions like forEach, map, filter, reduce, and some, among others.";

console.log(intro);

const numbers = [2, 3, 8, 6, "strs"];
for (const num of numbers) {
  console.log(num);
}

const greeting = "Hello, G";
for (const letter of greeting) {
  console.log(`Each letter of the greeting is: ${letter}`);
}

// Map methods
const countryMap = new Map();
countryMap.set("IN", "India");
countryMap.set("Pak", "Pakistan");
countryMap.set("UK", "United Kingdom");
countryMap.set("IN", "India"); // In map, we can't add duplicate keys

console.log(countryMap);
