const Intro =
  "When you want to execute a block if a condition evaluates to true, you often use an if…else statement.";

let Age = 17;
let Permission;

Permission = Age <= 18 ? "you can drive" : "you can not drive";
// Permission = Age >= 18 ? "you can drive" : "you can not drive";
// condition ? expressionIfTrue : expressionIfFalse;

console.log(Permission);

// lets explore another examples---
let speed = 90;
let message = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "OK";

console.log(message);
