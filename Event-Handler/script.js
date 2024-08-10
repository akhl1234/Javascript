console.log("Hello events");
var button = document.querySelector("#clicked");
button.addEventListener("click", function () {
  button.style.color = "red";
  button.style.backgroundColor = "yellow";
  alert("clicked thanks");
  console.log("button clicked ");
});

let inputs = document.querySelector("#inp");
inputs.addEventListener("input", function (event) {
  console.log(event.target.value);
});

element.removeEventListener(event, callbackFunction, options);

var button = document.getElementById("myButton");

// Function to handle button click
function handleButtonClick() {
  button.style.backgroundColor = "orange";
  console.log("Button CLicked");
}

// Add event listener to the button
button.addEventListener("click", handleButtonClick);

// Remove event listener after 5 seconds
setTimeout(function () {
  button.removeEventListener("click", handleButtonClick);
  alert("Event listener removed!");
}, 5000);
