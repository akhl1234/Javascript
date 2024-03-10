const intro =
  "The while loop repeats a block of code while a specified condition is true.";

// Print numbers incremented by 3 using a while loop
let number = 1;
while (number <= 25) {
  console.log("Incremented number by 3: ", number);
  number += 3;
}

// Print the multiplication table of 2 using a while loop
let multiplier = 2;
console.log("The multiplication table of 2 is: ");
while (multiplier <= 20) {
  console.log(multiplier);
  multiplier += 2;
}
