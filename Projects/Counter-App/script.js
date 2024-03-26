document.addEventListener("DOMContentLoaded", function () {
  const decrementButton = document.querySelector(".Decrease");
  const incrementButton = document.querySelector(".Increase");
  const countDisplay = document.getElementById("count");
  const resetButton = document.querySelector(".reset");

  let count = 0;

  decrementButton.addEventListener("click", () => {
    count--;
    updateCountDisplay();
  });

  incrementButton.addEventListener("click", () => {
    count++;
    updateCountDisplay();
  });

  function updateCountDisplay() {
    countDisplay.textContent = count;
  }

  resetButton.addEventListener("click", function () {
    count = 0;
    updateCountDisplay();
  });
});
