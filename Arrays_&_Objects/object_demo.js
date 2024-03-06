const definition =
  "Properties: Represent characteristics or attributes of an object (e.g., a car’s color, weight, or model).";
const Methods =
  "Define actions that an object can perform (e.g., starting, stopping, or driving a car).";
console.log(definition + "\n " + Methods);

// object create methods---
const car = {
  Brand: "Mahindra",
  Model: "XUV-700",
  color: "Light-Blue",
  Origin: "India",
  Year: 2023,
};
car.Number = 1521; // Adding property
console.log(car);

//Accessing Object Properties objectName["propertyName"] or also use curly braces lets explore both of them.
console.log(car.color); // this one is dot notation.
console.log(car["Number"]);
console.log(car["Origin"]); // Bracket Notation ***remeber***-
