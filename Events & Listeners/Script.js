console.log(
  "JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.Common events include mouse clicks, keyboard presses, page loads, and form submissions."
);
function show() {
  alert("Welcome To the Events Method in JS");
}

// color changer--
let a = 0;
let b = 0;
let c = 0;
function changeBackground() {
  let x = document.getElementById("bg");
  x.style.backgroundColor = "rgb(" + a + ", " + b + ", " + c + ")";
  a += 100;
  b += a + 50;
  c += b + 70;
  if (a > 255) a = a - b;
  if (b > 255) b = a;
  if (c > 255) c = b;
}

// var buttonFirst = document.getElementById("firstButton");
// console.log(buttonFirst);
// function once() {
//   buttonFirst.removeEventListener("click", once);
//   console.log("Here will be only one time event");
// }
// buttonFirst.addEventListener("click", once);
// var buttonSecond = document.getElementById("secondButton");
// secondButton.addEventListener("mousedown", function (event) {
//   switch (event.which) {
//     case 1:
//       console.log("left button");
//       break;
//     case 2:
//       console.log("wheel");
//       break;
//     case 3:
//       console.log("right button");
//       break;
//   }
// });
