let Explaination =
  "The do...while loop statement creates a loop that executes a block until a condition evaluates to false. ";

let inc = 0;
do {
  console.log("this will printed till < 4", inc);
  inc++;
} while (inc < 4);

// lets try some another examples --
let result = "";
let i = 0;
do {
  i += 1;
  result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
