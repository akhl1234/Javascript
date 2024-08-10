// Regular Expression Cheat Sheet in JavaScript

// Creating a Regular Expression
const regexLiteral = /pattern/; // Using forward slashes
const regexConstructor = new RegExp("pattern"); // Using the RegExp constructor

// Example String
const str = "Hello, World! 123";

// Regular Expression Methods
const match = str.match(/World/); // Matching the pattern in the string
console.log("match:", match); // Output: ['World']

const testResult = /Hello/.test(str); // Testing if the pattern matches the string
console.log("testResult:", testResult); // Output: true

const replacedStr = str.replace(/World/, "Universe"); // Replacing matches with a replacement string
console.log("replacedStr:", replacedStr); // Output: 'Hello, Universe! 123'

const splitArray = str.split(/\s/); // Splitting the string based on the pattern (whitespace)
console.log("splitArray:", splitArray); // Output: ['Hello,', 'World!', '123']

// Regular Expression Modifiers
const regexModifier = /hello/gi; // Using modifiers 'g' (global) and 'i' (case-insensitive)
const modMatch = str.match(regexModifier); // Matching 'hello' case-insensitively
console.log("modMatch:", modMatch); // Output: ['Hello']

// Regular Expression Patterns

// Matching Characters
const alphabetsPattern = /[a-zA-Z]/; // Matching any letter
console.log("alphabetsPattern:", alphabetsPattern.test(str)); // Output: true

const digitsPattern = /\d/; // Matching any digit
console.log("digitsPattern:", digitsPattern.test(str)); // Output: true

// Quantifiers
const zeroOrMorePattern = /l*/; // Matching zero or more occurrences of 'l'
console.log("zeroOrMorePattern:", str.match(zeroOrMorePattern)); // Output: ['', '', 'll', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

const oneOrMorePattern = /l+/; // Matching one or more occurrences of 'l'
console.log("oneOrMorePattern:", str.match(oneOrMorePattern)); // Output: ['ll']

const optionalPattern = /e?/; // Matching zero or one occurrence of 'e'
console.log("optionalPattern:", str.match(optionalPattern)); // Output: ['e', '', 'e', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

const exactNumberPattern = /l{2}/; // Matching exactly 2 occurrences of 'l'
console.log("exactNumberPattern:", str.match(exactNumberPattern)); // Output: ['ll']

const rangePattern = /\d{2,4}/; // Matching 2 to 4 occurrences of a digit
console.log("rangePattern:", str.match(rangePattern)); // Output: ['123']

// Character Classes
const anyOfPattern = /[aeiou]/; // Matching any vowel
console.log("anyOfPattern:", str.match(anyOfPattern)); // Output: ['e', 'o', 'o']

const exceptPattern = /[^aeiou]/; // Matching any character except vowels
console.log("exceptPattern:", str.match(exceptPattern)); // Output: ['H', 'l', 'l', ',', ' ', 'W', 'r', 'l', 'd', '!', ' ', '1', '2', '3']

const rangeOfCharsPattern = /[a-z]/; // Matching any lowercase letter
console.log("rangeOfCharsPattern:", str.match(rangeOfCharsPattern)); // Output: ['e', 'l', 'l', 'o', 'r', 'l', 'd']

const predefinedPattern = /\w/; // Matching any word character (alphanumeric or underscore)
console.log("predefinedPattern:", str.match(predefinedPattern)); // Output: ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'r', 'l', 'd', '1', '2', '3']

const negatedPredefinedPattern = /\W/; // Matching any non-word character
console.log("negatedPredefinedPattern:", str.match(negatedPredefinedPattern)); // Output: [',', ' ', '!', ' ']

const digitPattern = /\d/; // Matching any digit
console.log("digitPattern:", str.match(digitPattern)); // Output: ['1', '2', '3']

const nonDigitPattern = /\D/; // Matching any non-digit
console.log("nonDigitPattern:", str.match(nonDigitPattern)); // Output: ['H', 'e', 'l', 'l', 'o', ',', ' ', 'W', 'o', 'r', 'l', 'd', '!', ' ']

// Anchors
const startOfLinePattern = /^Hello/; // Matching 'Hello' at the start of a line
console.log("startOfLinePattern:", startOfLinePattern.test(str)); // Output: true

const endOfLinePattern = /123$/; // Matching '123' at the end of a line
console.log("endOfLinePattern:", endOfLinePattern.test(str)); // Output: true

const wordBoundaryPattern = /\bWorld\b/; // Matching 'World' as a whole word
console.log("wordBoundaryPattern:", wordBoundaryPattern.test(str)); // Output: true

// Grouping and Capturing
const groupPattern = /(He)(llo)/; // Grouping characters 'He' and 'llo'
console.log("groupPattern:", str.match(groupPattern)); // Output: ['Hello', 'He', 'llo']

const capturePattern = /(?<greeting>Hello), World!/; // Capturing a pattern with a name
const matchWithGroups = str.match(capturePattern);
console.log("capturePattern:", matchWithGroups.groups.greeting); // Output: 'Hello'

// Flags
const globalFlag = /o/g; // Matching all occurrences of 'o'
console.log("globalFlag:", str.match(globalFlag)); // Output: ['o', 'o']

const caseInsensitiveFlag = /hello/i; // Matching 'hello' case-insensitively
console.log("caseInsensitiveFlag:", caseInsensitiveFlag.test(str)); // Output: true

const multilineFlag = /^Hello/gm; // Matching 'Hello' at the start of a line in a multiline string
const multiLineStr = `Hello, World!
Hello again!`;
console.log("multilineFlag:", multiLineStr.match(multilineFlag)); // Output: ['Hello', 'Hello']

// Escaping Special Characters
const specialCharPattern = /\$[0-9]/; // Matching '$' followed by a digit
const specialStr = "Price: $5";
console.log("specialCharPattern:", specialStr.match(specialCharPattern)); // Output: ['$5']

// Using Regular Expression Constructor
const dynamicPattern = new RegExp("world", "gi"); // Creating a regex with dynamic pattern and flags
console.log("dynamicPattern:", dynamicPattern.test(str)); // Output: true

// Summary of Regular Expression Methods

// Testing Regular Expressions
console.log("Testing regex:", /Hello/.test(str)); // Output: true

// Matching Regular Expressions
console.log("Matching regex:", str.match(/World/)); // Output: ['World']

// Replacing with Regular Expressions
console.log("Replacing regex:", str.replace(/World/, "Universe")); // Output: 'Hello, Universe! 123'

// Splitting with Regular Expressions
console.log("Splitting regex:", str.split(/\s/)); // Output: ['Hello,', 'World!', '123']
