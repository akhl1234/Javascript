let Intro_IIFE =
  " IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern that allows you to declare and execute a function at the same time.";
(function Name() {
  console.log(`Code goes here`);
})();

// With parameters--
(function (Ur_Name) {
  console.log(`Your Name Is ${Ur_Name} Remember It`);
})("Salman");

// With Arrow Function--
(() => {
  console.log("this is the method of IIFE using arrow function: ");
})();

// IIFE that returns a value
let Answer = (function (a, b) {
  return a + b;
})(5, 7);
console.log(Answer);
