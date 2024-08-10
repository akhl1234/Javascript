//Function that validates user input and throws a custom error if validation fails
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUserInput(input) {
  try {
    if (input.trim() === "") {
      throw new ValidationError("Input cannot be empty!");
    }
    console.log("Input is valid:", input);
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

validateUserInput("");
validateUserInput("Hello World");
