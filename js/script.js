// Data
const boards = ["Tharsis", "Hellas", "Elysium"];

let panelsOpen = false;

// HTML Elements
const boardText = document.getElementById("boardText");
const randomButton = document.getElementById("random-btn");
const checkboxes = document.querySelectorAll("input");

// Functions
function randomise() {
  const randomBoard = boards[Math.floor(Math.random() * 3)];

  boardText.innerText = randomBoard;
}

function togglePanels() {
  checkboxes.forEach(cb => {
    cb.checked = !cb.checked;
  });

  panelsOpen = !panelsOpen;
}

function generate() {
  let waitTime = 0; // so there is no timeout on the initial panel opening
  if (panelsOpen) {
    togglePanels();
    waitTime = 1200;
  }
  setTimeout(randomise, waitTime);
  setTimeout(togglePanels, waitTime);
}

// Event Listners
randomButton.addEventListener("click", generate);
