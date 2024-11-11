const cells = document.querySelectorAll('.cell');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let jelJatekos = 'X';
let gameFinished = false;
let xWins = 0;
let oWins = 0;
let draws = 0;

const xWinsDisplay = document.getElementById('x-wins');
const oWinsDisplay = document.getElementById('o-wins');
const drawsDisplay = document.getElementById('Dontetlen');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!gameFinished && cell.innerHTML === '') {
            cell.innerHTML = jelJatekos;
            if (checkWin(jelJatekos)) {
                alert(jelJatekos + ' nyert!');
                gameFinished = true;
                if (jelJatekos === 'X') {
                    xWins++;
                    xWinsDisplay.textContent = `X nyert: ${xWins}`;
                } else {
                    oWins++;
                    oWinsDisplay.textContent = `O nyert: ${oWins}`;
                }
            } else if (checkDraw()) {
                alert('Döntetlen!');
                gameFinished = true;
                draws++;
                drawsDisplay.textContent = `Döntetlen: ${draws}`;
            } else {
                jelJatekos = jelJatekos === 'X' ? 'O' : 'X';
            }
        }
    });
});

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].innerHTML === player;
        });
    });
}

function checkDraw() {
    return Array.from(cells).every(cell => {
        return cell.innerHTML !== '';
    });
}

document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        resetGame();
    }
});

function resetGame() {
    cells.forEach(cell => {
        cell.innerHTML = '';
    });
    jelJatekos = 'X';
    gameFinished = false;
}

