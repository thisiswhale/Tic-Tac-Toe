const grumpy = 'https://a.wattpad.com/useravatar/GrumpyKittyCat1212.128.403917.jpg';
const doge = 'https://78.media.tumblr.com/avatar_8882900ce8af_128.pnj';
let humanAvatar = grumpy;
//total possible wins
const winSets = [
  [
    0, 1, 2
  ],
  [
    3, 4, 5
  ],
  [
    6, 7, 8
  ],
  [
    0, 3, 6
  ],
  [
    1, 4, 7
  ],
  [
    2, 5, 8
  ],
  [
    0, 4, 8
  ],
  [
    2, 4, 6
  ]
];
const sizeToWin = 3;
let human = new Array();
let computer = new Array();
let humanTurn = true; //human's turn
let positions = document.getElementsByTagName('td');

function setGame() {
  for (let i = 0; i < positions.length; i++) {
    positions[i].addEventListener('click', getHumanMove);
  }
}

function getHumanMove() {
  this.innerHTML = '<img src=' + humanAvatar + '>';
  this.removeEventListener('click', getHumanMove)
  let index = parseInt(this.getAttribute('data-key'));
  human.push(index);
  human.sort((a, b) => a - b);

  if (isWinner()) {
    console.log('human win');
  } else {
    humanTurn = false;
    getComputerMove();
  }
}

function getComputerMove() {
  let random = Math.floor()
  this.innerHTML = '<img src=' + computerAvatar + '>';
  this.removeEventListener('click', getHumanMove)
  let index = parseInt(this.getAttribute('data-key'));
  computer.push(index);
  computer.sort((a, b) => a - b);
  if (isWinner()) {
    console.log('computer win');
  } else {
    humanTurn = true;
  }
}

function isWinner() { //check three in a row
  let win = false;
  let checkArray;
  humanTurn == true
    ? checkArray = human
    : checkArray = computer;
  if (checkArray.length >= sizeToWin) {
    for (let i = 0; i < winSets.length; i++) {
      let set = winSets[i]; //winning hand e.g.[0,1,2]
      let setFound = true; // this determines if we find the winning set

      for (let j = 0; j < set.length; j++) {
        // check if number is in current players hand
        // if not, break, not winner
        let found = false;
        for (let k = 0; k < checkArray.length; k++) {
          if (set[j] === checkArray[k]) { // e.g check if 0..1..2 is found in checkArray at positon 0
            found = true;
            break; //break k for loop and then search next set[1]
          }
        }
        // value not found in players hand
        // not a valid set, move on to next set to check
        if (found == false) {
          setFound = false;
          break; // break j for loop
        }
      }
      if (setFound == true) {
        win = true;
        break;
      }
    }
  }
  return win;
}

function reset() {
  human = [];
  computer = [];
  setGame();
}
window.onload = setGame;
