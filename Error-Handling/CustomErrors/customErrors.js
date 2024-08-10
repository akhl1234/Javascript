// Custom error class extending the built-in Error class
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function throwCustomError() {
  try {
    throw new CustomError("This is a custom error!");
  } catch (error) {
    console.error(`${error.name}: ${error.message}`);
  }
}

throwCustomError();
