const Intro =
  "To check multiple conditions and execute the corresponding block if a condition is true, you use the `if...else...if` statement like this:";

let Month = 5;
let Month_Name;

// I started with 4, but you can choose any value (e.g., 1, 2, 3, 4, or 0)
if (Month === 4) {
  Month_Name = "April";
} else if (Month === 7) {
  Month_Name = "July";
} else if (Month === 8) {
  Month_Name = "August";
} else if (Month === 5) {
  Month_Name = "May";
} else {
  console.log("The statement does not match anything."); // i preferd you to use === it will help to avoid mistakes
}

console.log(Month_Name);

let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let BMI = weight / (height * height);

let weightStatus;

if (BMI < 18.5) {
  weightStatus = "Underweight";
} else if (BMI >= 18.5 && BMI <= 24.9) {
  weightStatus = "Healthy Weight";
} else if (BMI >= 25 && BMI <= 29.9) {
  weightStatus = "Overweight";
} else {
  weightStatus = "Obesity";
}

console.log(weightStatus);
