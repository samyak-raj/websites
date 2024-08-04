const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], //checking for rows
  [0, 3, 6], [1, 4, 7], [2, 4, 8], //checking for columns
  [0, 4, 8], [2, 4, 6],            //checking for diagonals
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

function initialize() {
  cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  statusText.textContent = `${currentPlayer}'s turn.`;
  restartBtn.addEventListener("click", restart);
  running = true;
}

function cellClicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) 
    return;

  updateCell(this, cellIndex);
  checkWinner();
}

function updateCell(cell, index) {
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        let condition = winConditions[i];
        let cellA = options[condition[0]];
        let cellB = options[condition[1]];
        let cellC = options[condition[2]];
        
        if (cellA == "" || cellB == "" || cellC == "")
            continue

        else if (cellA == cellB && cellB == cellC){
            roundWon = true;
            break
        }
    }

    if (roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if (!options.includes("")){
        statusText.textContent = `Draw!`;
        running = False;
    }
    else{
        changePlayer()
    }
}

function restart() {
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    statusText.textContent = `${currentPlayer}'s turn.`;
    running = true
}

initialize();
