let intro_break = "The break statement is used to exit a loop prematurely.";
for (let i = 0; i <= 9; i += 2) {
  if (i === 6) {
    console.log("the number is 6");
    break;
  }
  console.log(i);
}

let intro_continue =
  "The continue statement is used to skip the current iteration of the loop and proceed to the next iteration.";

for (let x = 1; x <= 5; x++) {
  if (x === 2) {
    // two will be passed and not will print--
    continue;
  }
  console.log(x);
}
