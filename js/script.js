// Data
const boards = ["tharsis", "hellas", "elysium"];

let panelsOpen = false;

// HTML Elements
const boardText = document.getElementById("boardText");
const randomButton = document.getElementById("random-btn");
const panels = document.querySelectorAll(".panel");

const board = document.getElementById("board");

// Functions
function randomise() {
  const randomBoard = boards[Math.floor(Math.random() * 3)];
  boardText.innerText =
    randomBoard.charAt(0).toUpperCase() + randomBoard.slice(1);
  board.className = "randomiser " + randomBoard;
}

function togglePanels() {
  panels.forEach(panel => panel.classList.toggle("open"));

  panelsOpen = !panelsOpen;
}

function generate() {
  let waitTime = 0; // so there is no timeout on the initial panel opening
  if (panelsOpen) {
    waitTime = 1200;
    togglePanels();
  }
  setTimeout(randomise, waitTime);
  setTimeout(togglePanels, waitTime);
}

// Event Listners
randomButton.addEventListener("click", generate);
