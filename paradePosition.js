const finalPosition = function (moving) {
  let x = 0;
  let y = 0;
  for (let i = 0; i <= moving.length; i++) {
    if (moving[i] === 'north') {
      y++; 
    }
    else if (moving[i] === 'south') {
      y--;
    }
    else if (moving[i] === 'west') {
      x--;
    }
    else if (moving[i] === 'east') {
      x++;
    }
  }
  return [x, y];
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));