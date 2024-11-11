const gameBoard = document.getElementById('game-board');
const ducks = document.getElementsByClassName('duck');
const scoreBoard = document.querySelector('.shoot');

let pont = 0;
let shoot = 10;
let timerId;
let deadDuck=0;
let poteto=0;

function moveDucks() {
  timerId = setInterval(function() {
    for (let i = 0; i < ducks.length; i++) {
      const direction = Math.random() < 3 ? -1 : 1;
      const leftPosition = parseInt(ducks[i].style.left);
      if (leftPosition < 0 || leftPosition > 400) {
        ducks[i].setAttribute('data-direction', direction * -1);
      }
      ducks[i].style.left = leftPosition + (Math.random() * 15 * direction) + 'px';
    }
  }, 300);
}

function shootDuck(event) {
  event.stopPropagation();
  const duck = event.target;

  setTimeout(function() {
    gameBoard.removeChild(duck);
    pont += 10;
    shoot -= 1;
    deadDuck +=1;
    scoreBoard.innerHTML = 'Maradék lövés: ' + shoot;
    if (shoot === 0) {
      clearInterval(timerId);
      alert('Vége a járéknak! Elért pontjaid: ' + pont);
      alert('Lelőtt kacsa: '+ deadDuck);
      alert('Mellélövés: '+ poteto);
    }
  }, 200);
}

function shootBoard(event) {
  event.stopPropagation();
  shoot -= 1;
  pont -= 5;
  poteto +=1
  scoreBoard.innerHTML = 'Maradék lövés: ' + shoot;
  if (shoot === 0) {
    clearInterval(timerId);
    alert('Vége a játéknak! Ennyi mg-os snüszt tömöt be Zsizsa: ' + pont);
    alert('Lelőtt majmok: '+ deadDuck);
    alert('Mellélövés: '+ poteto);
  }
}

for (let i = 0; i < ducks.length; i++) {
  ducks[i].style.left = (i * 185) + 'px';
  ducks[i].style.top = (Math.random() * 300) + 'px';
  ducks[i].setAttribute('data-direction', 1);
  ducks[i].addEventListener('click', shootDuck);
}

gameBoard.addEventListener('click', shootBoard);

moveDucks();