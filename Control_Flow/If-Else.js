const Intro =
  "The if statement executes a block if a condition is true. When the condition is false, it does nothing. But if you want to execute a statement if the condition is false, you can use an if...else statement.";

// Example usage of the if_else statement
let syntax = 10;
if (syntax > 8) {
  console.log(
    "This will print and work because the statement is true (10 > 8)."
  );
} else {
  console.log(
    "Check your statement; if the `if` condition is false, then the `else` statement will be executed."
  );
}
