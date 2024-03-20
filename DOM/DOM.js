// Log a clear message to the console
console.log("Welcome to the world of DOM manipulation!");

// **DOM Selection**
// Select elements using various methods:
const heading1 = document.querySelector("h1"); // Select the first h1 element
const heading2ById = document.getElementById("H22"); // Select an element by its ID

// Log selected elements to the console for inspection
console.log(heading1);
console.log(heading2ById);

// **Modifying HTML Content**
// Change the text content of an element:
document.querySelector("h2").innerHTML =
  "Content updated dynamically using JavaScript!";

// **Styling Elements**
// Apply styling to an element:
document.querySelector(".styling-css").style.backgroundColor = "yellow";

// **Event Listeners**
// Listen for click events and respond accordingly:
const textChangeElement = document.querySelector("#text-change");
textChangeElement.addEventListener("click", () => {
  textChangeElement.textContent = "Content changed by clicking!";
  textChangeElement.style.backgroundColor = "green";
  textChangeElement.style.color = "black";
});

const lightBulb = document.querySelector("#Light");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "green";
});

// **DOM Cheatsheet:**
// (Comments provide a quick reference for common DOM operations)

// -- DOM Selection --
// elementById = document.getElementById("id");
// elementsByClass = document.getElementsByClassName("class");
// elementsByTagName = document.getElementsByTagName("tagname");
// elementBySelector = document.querySelector("selector");
// elementsBySelectorAll = document.querySelectorAll("selector");

// -- DOM Manipulation --
// element.innerHTML = "new content";
// element.textContent = "new text content";
// element.setAttribute("attribute", "value");
// element.style.property = "value";
// element.classList.add("class");
// element.classList.remove("class");
// element.classList.toggle("class");
// ... (More methods for DOM manipulation)

// -- Event Handling --
// element.addEventListener("event", callback);
// element.removeEventListener("event", callback);
// ... (More methods for event handling)

// -- Other Useful Features --
// ... (Window object, timers, etc.)
