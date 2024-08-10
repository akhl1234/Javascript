// Demonstration of try-catch-finally block
function executeWithFinally() {
  try {
    console.log("Inside try block");
    // Simulate an error
    throw new Error("An error occurred!");
  } catch (error) {
    console.error("Caught an error in catch block:", error.message);
  } finally {
    console.log("Finally block executed");
  }
}

executeWithFinally();
