const cells = document.querySelectorAll(".cell"); // Select all elements with class "cell"
const statusText = document.querySelector("#statusText"); // Select the status text element
const restartBtn = document.querySelector("#restartBtn"); // Select the restart button

// Winning combinations for Tic-Tac-Toe
const winConditions = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];

let options = ["", "", "", "", "", "", "", "", ""]; // Array representing the board state
let currentPlayer; // Variable to track current player

// Randomly select the first player
if (Math.random() < 0.5) {
  currentPlayer = "X";
} else {
  currentPlayer = "O";
}
let running = false; // Game state tracker

initializeGame(); // Start the game

// Function to randomly assign a player
function getRandomPlayer() {
  return Math.random() < 0.5 ? "X" : "O";
}

// Function to initialize the game
function initializeGame() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked)); // Add event listeners to cells
  restartBtn.addEventListener("click", restartGame); // Add event listener to restart button
  statusText.textContent = `${currentPlayer}'s turn`; // Display the current player's turn
  running = true; // Set game as running
}

// Function to handle cell clicks
function cellClicked() {
  const cellIndex = Number(this.getAttribute("cellIndex")); // Get the index of the clicked cell
  if (options[cellIndex] != "" || !running) { // If cell is already filled or game is not running, return
    return;
  }
  updateCell(this, cellIndex); // Update the cell with the current player's move
  checkWinner(); // Check if the game has a winner
}

// Function to update the cell with the current player's move
function updateCell(cell, index) {
  options[index] = currentPlayer; // Update board state
  cell.textContent = currentPlayer; // Display current player's symbol in the cell
}

// Function to switch to the other player
function changePlayer() {
  currentPlayer = currentPlayer == "X" ? "O" : "X"; // Toggle between "X" and "O"
  statusText.textContent = `${currentPlayer}'s turn`; // Update status text
}

// Function to check for a winner or a draw
function checkWinner() {
  let roundWon = false; // Track if someone has won
  for (let i = 0; i < winConditions.length; i++) { // Loop through all win conditions
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];
    if (cellA == "" || cellB == "" || cellC == "") { // Skip if any of the cells are empty
      continue;
    }
    if (cellA == cellB && cellB == cellC) { // Check if all three cells match
      roundWon = true;
      break;
    }
  }
  if (roundWon || !options.includes("")) { // If round is won or board is full
    cells.forEach((cell) => cell.removeEventListener("click", cellClicked)); // Remove event listeners to stop further clicks
  }
  if (roundWon) {
    statusText.textContent = `${currentPlayer} wins!`; // Display win message
    running = false; // Stop game
  } else if (!options.includes("")) {
    statusText.textContent = `Draw!`; // Display draw message
    running = false; // Stop game
  } else {
    changePlayer(); // If no winner, change player
  }
}

// Function to restart the game
function restartGame() {
  currentPlayer = getRandomPlayer(); // Select a new random starting player
  options = ["", "", "", "", "", "", "", "", ""]; // Reset board state
  cells.forEach((cell) => (cell.textContent = "")); // Clear all cells
  initializeGame(); // Restart the game
}
