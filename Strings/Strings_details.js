// 

// String creation
let str1 = "Hello, world!"; // Using string literal
let str2 = new String("Hello, world!"); // Using String constructor

// String length
console.log("Length of str1:", str1.length); // Output: 13

// Accessing characters
console.log("First character of str1:", str1[0]); // Output: H
console.log("Second character of str2:", str2.charAt(1)); // Output: e

// Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// String methods
console.log("Uppercase:", str1.toUpperCase());
console.log("Lowercase:", str2.toLowerCase());
console.log("Index of 'world':", str1.indexOf("world"));
console.log("Substring:", str2.substring(0, 5));

// String interpolation (using template literals)
let age = 30;
console.log(`My name is ${firstName} ${lastName} and I am ${age} years old.`);

// Unicode and escape sequences
let unicodeStr = "\u0041\u0042";
console.log("Unicode string:", unicodeStr);

let escapeStr = "Line 1\nLine 2";
console.log("Escape sequence:", escapeStr);

// Creating strings with String constructor
let str3 = new String("Hello, world!");
console.log("Type of str3:", typeof str3);
console.log("Value of str3:", str3.valueOf());
