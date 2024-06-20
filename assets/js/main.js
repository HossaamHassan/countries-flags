// const box = document.querySelectorAll(".box");
const boxes = document.querySelectorAll(".box");
const countDisplays = document.querySelectorAll(".count"); // Changed variable name for clarity

boxes.forEach((box) => {
  let count = 0; // Initialize a count for each box

  box.addEventListener("click", () => {
    count++; // Increment the count for the clicked box
    const countDisplay = box.querySelector(".count"); // Find the count display within the box
    countDisplay.textContent = count; // Update the count display
    countDisplay.className = `count d-flex align-items-center justify-content-around fw-bold`;
  });
});
