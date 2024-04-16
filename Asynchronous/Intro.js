const Asynchronous =
  "allows tasks to run independently of the main program flow, enabling the program to continue executing other tasks while waiting for certain operations to complete.";

console.log(Asynchronous); // Immediately outputs the definition

// Simulate an asynchronous operation (e.g., fetching data)
setTimeout(() => {
  console.log("Inside the set timeout (printed after 3 seconds)");
}, 3000);

console.log(
  "This line executes before the timeout (demonstrates non-blocking behavior)"
);
