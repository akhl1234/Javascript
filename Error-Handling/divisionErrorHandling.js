// Task 2: Function that divides two numbers and throws an error if the denominator is zero
function divideNumbers(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return numerator / denominator;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

console.log(divideNumbers(10, 2)); // Output: 5
console.log(divideNumbers(10, 0)); // Output: Error: Cannot divide by zero!
