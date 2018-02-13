const grumpy = 'https://a.wattpad.com/useravatar/GrumpyKittyCat1212.128.403917.jpg';
const doge = 'https://78.media.tumblr.com/avatar_8882900ce8af_128.pnj';
let humanAvatar = grumpy;

let counter = 9;

let human = {
  gamePiece: 'O',
  avatar: doge
}
let computer = {
  gamePiece: 'X',
  avatar: grumpy
}

let currentGrid = [0,1,2,
                   3,4,5,
                   6,7,8
];
let positions = document.getElementsByTagName('td');
const result = document.getElementsByClassName('result');
//Starting the game
function setGame() {
  for (let i = 0; i < positions.length; i++) {
    positions[i].addEventListener('click', getHumanMove);
  }
}

//keeps count of function calls
let numberOfFunctionCalls = 0;

function minimax(newGrid, player) {
  numberOfFunctionCalls++;
  let availSpots = emptyIndexies(newGrid);

  // checks for the terminal states such as win, lose, and tie and returning a value accordingly
  if (checkWin(newGrid, human.gamePiece)) {
    return {score: -10};
  } else if (checkWin(newGrid, computer.gamePiece)) {
    return {score: 10};
  } else if (availSpots.length === 0) {
    return {score: 0};
  }

  // an array to collect all the objects
  let moves = [];

  // loop through available spots
  for (let i = 0; i < availSpots.length; i++) {
    //create an object for each and store the index of that spot that was stored as a number in the object's index key
    let move = {};
    move.index = newGrid[availSpots[i]];

    // set the empty spot to the current player
    newGrid[availSpots[i]] = player;

    //if collect the score resulted from calling minimax on the opponent of the current player (recursion)
    if (player == computer.gamePiece) {
      let result = minimax(newGrid, human.gamePiece);
      move.score = result.score;
    } else {
      let result = minimax(newGrid, computer.gamePiece);
      move.score = result.score;
    }

    //reset the spot to empty
    newGrid[availSpots[i]] = move.index;

    // push the object to the array
    moves.push(move);
  }
  // if it is the computer's turn loop over the moves and choose the move with the highest score
  let bestMove;
  if (player === computer.gamePiece) {
    let bestScore = -10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score > bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  } else {

    // else loop over the moves and choose the move with the lowest score
    let bestScore = 10000;
    for (let i = 0; i < moves.length; i++) {
      if (moves[i].score < bestScore) {
        bestScore = moves[i].score;
        bestMove = i;
      }
    }
  }

  // return the chosen move (object) from the array to the higher depth
  return moves[bestMove];
}

function emptyIndexies(grid) {
  return grid.filter(thisCell => thisCell != 'O' && thisCell != 'X');
}

function getHumanMove() {
  this.innerHTML = '<img src=' + human.avatar + '>';
  this.removeEventListener('click', getHumanMove)
  let index = parseInt(this.getAttribute('data-key'));
  currentGrid[index] = human.gamePiece;


  if (checkWin(currentGrid, human.gamePiece)) {

  } else {
    getComputerMove();
  }

}

function getComputerMove() {
  numberOfFunctionCalls = 0;
  // finding the ultimate play on the game that favors the computer
  var bestSpot = minimax(currentGrid, computer.gamePiece);
  //loging the results
  console.log("index: " + bestSpot.index);
  console.log("function calls: " + numberOfFunctionCalls);

  const computerPick = document.getElementById(bestSpot.index);
  computerPick.innerHTML = '<img src=' + computer.avatar + '>';
  computerPick.removeEventListener('click', getHumanMove)
  currentGrid[bestSpot.index] = computer.gamePiece;

  if (checkWin(currentGrid, computer.gamePiece)) {
    console.log('bot win');
  }
}

function checkWin(grid, player) {
  if (
         (grid[0] == player && grid[1] == player && grid[2] == player) ||
         (grid[3] == player && grid[4] == player && grid[5] == player) ||
         (grid[6] == player && grid[7] == player && grid[8] == player) ||
         (grid[0] == player && grid[3] == player && grid[6] == player) ||
         (grid[1] == player && grid[4] == player && grid[7] == player) ||
         (grid[2] == player && grid[5] == player && grid[8] == player) ||
         (grid[0] == player && grid[4] == player && grid[8] == player) ||
         (grid[2] == player && grid[4] == player && grid[6] == player)
         ) {
         return true;
     }
     else if (counter == 0){
       //draw
     }else {
         return false;
     }
}

function reset() {
  human = [];
  computer = [];
  setGame();
}

window.onload = setGame;
