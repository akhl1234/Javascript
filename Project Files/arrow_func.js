// Arrow Function without Parameters
const intro = () => {
  console.log("Hi! You are on the correct platform to learn the updated version of JS, which is ES6.");
};

intro();

// Arrow Function with Parameters
const add = (a, b, c) => {
  console.log(a + b + c);
};

add(10, 15.2, 3);

// Arrow Function with Default Parameters
const addWithDefault = (x, y, z = 15) => {
  console.log(`${x} ${y} ${z}`);
};

addWithDefault(15, 12);
