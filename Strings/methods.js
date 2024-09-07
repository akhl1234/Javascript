// Basic String Methods
let text = "Hello World";
console.log("Length:", text.length); // Output: 11
console.log("charAt(0):", text.charAt(0)); // Output: H
console.log("charCodeAt(0):", text.charCodeAt(0)); // Output: 72
console.log("at(-1):", text.at(-1)); // Output: d

// String Manipulation Methods
let text1 = "Hello";
let text2 = "World";
console.log("concat:", text1.concat(" ", text2)); // Output: Hello World
console.log("includes 'World':", text.includes("World")); // Output: true
console.log("startsWith 'Hello':", text.startsWith("Hello")); // Output: true
console.log("endsWith 'World':", text.endsWith("World")); // Output: true

// Substring Methods
console.log("slice(0, 5):", text.slice(0, 5)); // Output: Hello
console.log("substring(0, 5):", text.substring(0, 5)); // Output: Hello
console.log("substr(0, 5):", text.substr(0, 5)); // Output: Hello

// Case Conversion Methods
console.log("toLowerCase:", text.toLowerCase()); // Output: hello world
console.log("toUpperCase:", text.toUpperCase()); // Output: HELLO WORLD

// Replace Methods
console.log("replace 'World' with 'Everyone':", text.replace("World", "Everyone")); // Output: Hello Everyone
let text3 = "Hello World World";
console.log("replaceAll 'World' with 'Everyone':", text3.replaceAll("World", "Everyone")); // Output: Hello Everyone Everyone

// Trim Methods
let text4 = "  Hello World  ";
console.log("trim:", text4.trim()); // Output: Hello World
console.log("trimStart:", text4.trimStart()); // Output: Hello World  
console.log("trimEnd:", text4.trimEnd()); // Output:   Hello World

// Other Useful Methods
console.log("split by space:", text.split(" ")); // Output: ["Hello", "World"]
console.log("repeat 3 times:", text1.repeat(3)); // Output: HelloHelloHello
