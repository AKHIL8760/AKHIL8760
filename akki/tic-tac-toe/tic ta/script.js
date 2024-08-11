// script.js

const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const restartBtn = document.getElementById('restart');
const playAgainstComputerBtn = document.getElementById('play-against-computer');
const playAgainstHumanBtn = document.getElementById('play-against-human');

let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;
let isAgainstComputer = false;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(e) {
    const index = e.target.getAttribute('data-index');
    if (gameBoard[index] === '' && isGameActive) {
        gameBoard[index] = currentPlayer;
        e.target.textContent = currentPlayer;
        e.target.classList.add('disabled');
        checkForWinner();
        if (isGameActive && isAgainstComputer && currentPlayer === 'X') {
            setTimeout(() => {
                computerMove();
            }, 500);
        } else {
            switchPlayer();
        }
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

function checkForWinner() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        isGameActive = false;
    } else if (!gameBoard.includes('')) {
        statusText.textContent = `It's a tie!`;
        isGameActive = false;
    } else {
        switchPlayer();
    }
}

function computerMove() {
    let availableCells = [];
    gameBoard.forEach((cell, index) => {
        if (cell === '') availableCells.push(index);
    });

    const randomIndex = availableCells[Math.floor(Math.random() * availableCells.length)];
    gameBoard[randomIndex] = 'O';
    cells[randomIndex].textContent = 'O';
    cells[randomIndex].classList.add('disabled');
    checkForWinner();
}

function restartGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    statusText.textContent = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('disabled');
    });
}

function playAgainstComputer() {
    isAgainstComputer = true;
    restartGame();
}

function playAgainstHuman() {
    isAgainstComputer = false;
    restartGame();
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', restartGame);
playAgainstComputerBtn.addEventListener('click', playAgainstComputer);
playAgainstHumanBtn.addEventListener('click', playAgainstHuman);

restartGame(); // Initialize game state
