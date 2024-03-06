let Return_Concept =
  "A function can return a value using the return statement. \n If no return statement exists, the function returns undefined.";

// let's explore the examples--

function Multiply(X, Y) {
  let Formula = X * Y;
  console.log("The multiplication of X * Y is :", Formula);
  return Formula;
}
Multiply(15, 18);
Multiply(10, 0);
Multiply(15, NaN);
