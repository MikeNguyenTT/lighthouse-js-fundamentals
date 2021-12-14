const generateBoard = function (whiteQueen, blackQueen) {
  const boardLength = 8;
  let board = [];
  for (let i = 0; i < boardLength; i++) {
    let row = [];
    for (let j = 0; j < boardLength; j++) {
      if (whiteQueen[0] === i && whiteQueen[1] === j) {
        row.push(1);
      }  else if (blackQueen[0] === i && blackQueen[1] === j) {
        row.push(1);
      } else {
        row.push(0);
      }
      
    }
    board.push(row);
  }
  return board;
}

const queenThreat = function(board) {
  let firstQueen = [];
  let secondQueen = [];
  let firstPositionFound = false;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        if (firstPositionFound === false) {
          firstQueen.push(i);
          firstQueen.push(j);
          firstPositionFound = true;
        }
        else {
          secondQueen.push(i);
          secondQueen.push(j);
        }

      }
    }
  }
  // Same colume
  if (firstQueen[0] === secondQueen[0]) {
    return true;
  }
  //Same row
  if (firstQueen[1] === secondQueen[1]) {
    return true;
  }
  // Diagonally the same, using absolute value for all 4 cases
  if (Math.abs(firstQueen[0] - secondQueen[0]) === Math.abs(firstQueen[1] - secondQueen[1])) {
    return true;
  }
  else {
    return false;
  }
}

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));