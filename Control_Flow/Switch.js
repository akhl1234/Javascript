const Intro_Switch =
  "The switch statement evaluates an expression, compares its results with case values, and executes the statement associated with the matching case value.";

let Months = 8;
let Months_Name;

switch (Months) {
  case 1:
    Months_Name = "January";
    break;

  case 3:
    Months_Name = "March";
    break;

  case 4:
    Months_Name = "April";
    break;

  case 8:
    Months_Name = "August";
    break;

  case 12:
    Months_Name = "December";
    break;

  default:
    Months_Name = "Invalid Month";
    break;
}

console.log(Months_Name);
