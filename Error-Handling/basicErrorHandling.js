// Task 1: Function that intentionally throws an error and handles it using try-catch
function throwErrorExample() {
  try {
    throw new Error("This is an intentional error!");
  } catch (error) {
    console.error("Caught an error:", error.message);
  }
}

throwErrorExample();
