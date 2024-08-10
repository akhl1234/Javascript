// Arithmetic Operations
console.log('Arithmetic Operations:');
const num1 = 5;
const num2 = 3;
console.log(`Addition: ${num1 + num2}`);  
console.log(`Subtraction: ${num1 - num2}`);  
console.log(`Multiplication: ${num1 * num2}`);  
console.log(`Division: ${num1 / num2}`);  
console.log(`Remainder: ${num1 % num2}`);  

// Assignment Operators
console.log('\nAssignment Operators:');
let num = 5;
num += 3;
console.log(`Addition Assignment: ${num}`);  
num -= 3;
console.log(`Subtraction Assignment: ${num}`);  

// Comparison Operators
console.log('\nComparison Operators:');
const num3 = 5;
const num4 = 3;
console.log(`Greater Than: ${num3 > num4}`);  
console.log(`Less Than: ${num3 < num4}`);  
console.log(`Greater Than or Equal: ${num3 >= num4}`);  
console.log(`Less Than or Equal: ${num3 <= num4}`);  
console.log(`Equal: ${num3 === num4}`);  
console.log(`Not Equal: ${num3 !== num4}`);  

// Logical Operators
console.log('\nLogical Operators:');
console.log(`And: ${num3 > num4 && num3 >= 4}`);  
console.log(`Or: ${num3 > num4 || num3 <= 4}`);  
console.log(`Not: ${!(num3 > num4)}`);  

// Ternary Operator
console.log('\nTernary Operator:');
const num5 = 5;
console.log(`Positive or Negative: ${num5 > 0 ? 'Positive' : 'Negative'}`);  