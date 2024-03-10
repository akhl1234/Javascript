let choice = "Pizza";
let message;

switch (choice) {
  case "Burger":
    message = "You selected Burger.";
    break;
  case "Pizza":
    message = "You selected Pizza.";
    break;
  case "Salad":
    message = "You selected Salad.";
    break;
  default:
    message = "Invalid choice.";
}

console.log(message);
