//stop watch
let timerInterval;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000)
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  document.querySelector('.timer')
    .innerText = formatTime(hours) + ':' +
    formatTime(minutes) + ':' +
    formatTime(seconds);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.querySelector('.timer')
    .innerText = '00:00:00'
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}

document.querySelector('.Start-btn')
  .addEventListener('click', startTimer);

document.querySelector('.stop-btn')
  .addEventListener('click', stopTimer)

document.querySelector('.reset-btn')
  .addEventListener('click', resetTimer);

//tic-tac-toe
const board = document.querySelector('.board');
let currentPlayer = 'X';
let gameEnd = false;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = i;
    cell.dataset.col = j;
    cell.addEventListener('click', cellClicked);
    board.appendChild(cell);
  }
}

function cellClicked() {
  if (gameEnd) return;
  if (!this.innerText) {
    this.innerText = currentPlayer;
    if (checkWin()) {
      alert(currentPlayer + ' wins!');
      gameEnd = true;
    } else if (checkDraw()) {
      alert("it's a draw!")
      gameEnd = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? '0' : 'X'
    }
  }
}

function checkWin() {
  const cells = document.querySelectorAll('.cell');
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let line of lines ) {
    const [a, b, c] = line;
    if (cells[a].innerText && 
      cells[a].innerText === cells[b].innerText &&
      cells[a].innerText === cells[c].innerText) {
        return true;
    }
  }
  return false;
}

function checkDraw() {
  const cells = document.querySelectorAll('.cells');
  for (let cell of cells) {
    if (!cell.innerText) {
      return false;
    }
  }
  return true;
}